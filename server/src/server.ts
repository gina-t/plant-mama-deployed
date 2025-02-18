import express, { Express, Request, Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { typeDefs, resolvers } from './graphqlSchemas/index.js';
import connectDB from './config/db.js';
import { authenticateToken } from './utils/auth.js';
import dotenv from 'dotenv';
import path from 'node:path';
import Stripe from 'stripe';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables based on the environment
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../../.env.development') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '../../.env.production') });
}

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  await connectDB();

  const PORT = process.env.PORT || 3001;
  const app: Express = express();
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  console.log('Stripe Secret Key:', stripeSecretKey);

  if (!stripeSecretKey) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable');
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-01-27.acacia',
  });
  console.log('Stripe instance created successfully');

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    cors({
      origin: [
        'https://plant-mama-deployed.onrender.com',
        'http://localhost:5173',
      ],
      credentials: true,
    })
  );

  interface RequestBody {
    amount: number;
  }

  app.post('/secret', async (req: Request, res: Response) => {
    const { amount } = req.body;
    console.log('Amount:', amount);
    console.log('Type of Amount:', typeof amount);
    try {
      const intent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'aud',
        automatic_payment_methods: { enabled: true },
      });

      res.json({ client_secret: intent.client_secret });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to create payment intent' });
    }
  });

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }: { req: Request }) => ({
        user: await authenticateToken({ req }),
      }),
    })
  );

  if (process.env.NODE_ENV === 'production') {
    const staticPath = path.join(__dirname, '../../client/dist');
    app.use(express.static(staticPath));

    app.get('*', (_req: Request, res: Response) => {
      const indexPath = path.join(staticPath, 'index.html');
      res.sendFile(indexPath);
    });
  } else {
    app.get('*', (_req: Request, res: Response) => {
      res.send('API is running');
    });
  }

  app.listen(PORT, () => {
    console.log(`Apollo Server is running on port: ${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();

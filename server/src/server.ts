import express, { Request, Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { typeDefs, resolvers } from './graphqlSchemas/index.js'; 
import connectDB from './config/db.js';
import { authenticateToken } from './utils/auth.js';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env.development') });

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  await connectDB();

  const PORT = process.env.PORT || 5000;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

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

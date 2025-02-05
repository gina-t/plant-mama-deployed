import typeDefs from './typeDefs.js';
import adminResolvers from './resolvers/adminResolvers.js';
import cartResolvers from './resolvers/cartResolvers.js';
import productResolvers from './resolvers/productResolvers.js';
import userProfileResolvers from './resolvers/userProfileResolvers.js';
import userAuthResolvers from './resolvers/userAuthResolvers.js';

const resolvers = {
  Query: {
    ...adminResolvers.Query,
    ...cartResolvers.Query,
    ...productResolvers.Query,
    ...userAuthResolvers.Query,
  },
  Mutation: {
    ...adminResolvers.Mutation,
    ...cartResolvers.Mutation,
    ...productResolvers.Mutation,
    ...userProfileResolvers.Mutation,
    ...userAuthResolvers.Mutation,
  },
};

export { typeDefs, resolvers };

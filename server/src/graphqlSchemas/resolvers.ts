import adminResolvers from './resolvers/adminResolvers.js';
import cartResolvers from './resolvers/cartResolvers.js';
import productResolvers from './resolvers/productResolvers.js';
import userAuthResolvers from './resolvers/userAuthResolvers.js';
import userProfileResolvers from './resolvers/userProfileResolvers.js';

const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...userProfileResolvers.Query,
  },
  Mutation: {
    ...adminResolvers.Mutation,
    ...cartResolvers.Mutation,
    ...productResolvers.Mutation,
    ...userAuthResolvers.Mutation,
    ...userProfileResolvers.Mutation,
  },
};

export default resolvers;

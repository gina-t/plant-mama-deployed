import { gql } from 'graphql-tag';
import adminTypeDefs from './typeDefs/adminTypeDefs.js';
import cartTypeDefs from './typeDefs/cartTypeDefs.js';
import productTypeDefs from './typeDefs/productTypeDefs.js';
import userAuthTypeDefs from './typeDefs/userAuthTypeDefs.js';
import userProfileTypeDefs from './typeDefs/userProfileTypeDefs.js';

const typeDefs = gql`
  ${adminTypeDefs}
  ${cartTypeDefs}
  ${productTypeDefs}
  ${userAuthTypeDefs}
  ${userProfileTypeDefs}
`;

export default typeDefs;

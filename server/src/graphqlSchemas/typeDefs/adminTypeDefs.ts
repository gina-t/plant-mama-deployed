import { gql } from 'graphql-tag';

const adminTypeDefs = gql`
  type Admin {
    username: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    admin: Admin!
  }

  type Query {
    admin(username: String!): Admin
  }

  type Mutation {
    loginAdmin(username: String!, password: String!): AuthPayload
  }
`;

export default adminTypeDefs;

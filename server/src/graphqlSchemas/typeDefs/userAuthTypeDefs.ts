// Type definitions define the structure of the GraphQL schema, specifying the types of data that can be queried or mutated, the relationships between different types, and the operations (queries and mutations) that can be performed.

import { gql } from 'graphql-tag';

const userAuthTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    cart: [CartItem]
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): AuthPayload
    loginUser(email: String!, password: String!): AuthPayload
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

export default userAuthTypeDefs;

import { gql } from 'graphql-tag';

const userProfileTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    cart: [CartItem]
  }

  type Query {
    getUserProfile(id: ID!): User
  }

  type Mutation {
    updateUserProfile(id: ID!, input: UpdateUserProfileInput!): User
  }

  input UpdateUserProfileInput {
    username: String
    email: String
    password: String
  }
`;

export default userProfileTypeDefs;

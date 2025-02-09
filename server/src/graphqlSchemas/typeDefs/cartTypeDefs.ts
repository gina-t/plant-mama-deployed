import { gql } from 'graphql-tag';

const cartTypeDefs = gql`
  type CartItem {
    product: Product!
    quantity: Int!
    price: Float!
  }

  type Cart {
    id: ID!
    items: [CartItem]
    promoCode: String
    total: Float!
    user: User!
  }

  type Mutation {
    createCart(input: CreateCartInput!): Cart
    updateCart(id: ID!, input: UpdateCartInput!): Cart
  }

  input CreateCartInput {
    user: ID!
    items: [CartItemInput!]!
    promoCode: String
    total: Float!
  }

  input UpdateCartInput {
    items: [CartItemInput!]
    promoCode: String
    total: Float
  }

  input CartItemInput {
    product: ID!
    quantity: Int!
    price: Float!
  }
`;

export default cartTypeDefs;
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
    username: String!
  }

  type Query {
    carts: [Cart]
    cart(cartId: ID!): Cart
  }

  type Mutation {
    createCart(input: CreateCartInput!): Cart
    updateCart(id: ID!, input: UpdateCartInput!): Cart
    addProductToCart(input: AddProductInput!): Cart
    deleteProductFromCart(productId: ID!): Cart
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

  input AddProductInput {
    cartId: ID!
    productId: ID!
    quantity: Int!
    price: Float!
  }
`;

export default cartTypeDefs;

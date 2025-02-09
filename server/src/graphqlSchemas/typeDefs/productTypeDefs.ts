import { gql } from 'graphql-tag';

const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    category: String!
    stock: Int!
    imageUrl: String!
    quantity: Int!
  }

  type Query {
    product(id: ID!): Product
    products: [Product]
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(
      id: ID!,
      name: String,
      price: Float,
      description: String,
      category: String,
      stock: Int,
      imageUrl: String,
      quantity: Int
    ): Product
  }

  input CreateProductInput {
    name: String!
    price: Float!
    description: String!
    category: String!
    stock: Int!
    imageUrl: String!
    quantity: Int!
  }
`;

export default productTypeDefs;
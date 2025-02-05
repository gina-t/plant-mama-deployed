// A schema is a collection of type definitions (hence "typeDefs") that together define the "shape" of queries that are executed against your data.
const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    category: String!
    stock: Int!
    imageUrl: String!
    sku: String!
    quantity: Int!
    wishlist: Boolean
    specialOffer: String
    shippingInfo: String
    brandInfo: String!
    createdBy: User!
    updatedBy: User!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
    users: [User]
    user(id: ID!): User
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
      sku: String,
      quantity: Int,
      wishlist: Boolean,
      specialOffer: String,
      shippingInfo: String,
      brandInfo: String
    ): Product
  }

  input CreateProductInput {
    name: String!
    price: Float!
    description: String!
    category: String!
    stock: Int!
    imageUrl: String!
    sku: String!
    quantity: Int!
    wishlist: Boolean
    specialOffer: String
    shippingInfo: String
    brandInfo: String!
    createdBy: ID!
    updatedBy: ID!
  }
`;
export default typeDefs;
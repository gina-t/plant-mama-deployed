const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean!
    cart: [CartItem]
  }

  type Admin {
    id: ID!
    username: String!
    email: String!
  }

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
    user(id: ID!): User
    users: [User]
    admin(username: String!): Admin
    cart(id: ID!): Cart
    carts: [Cart]
    product(id: ID!): Product
    products: [Product]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, username: String, email: String, password: String, isAdmin: Boolean): User
    updateUserProfile(id: ID!, input: UpdateUserProfileInput!): User
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
    loginAdmin(username: String!, password: String!): Admin
    createCart(input: CreateCartInput!): Cart
    updateCart(id: ID!, input: UpdateCartInput!): Cart
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    isAdmin: Boolean
  }

  input UpdateUserProfileInput {
    username: String
    email: String
    password: String
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

export default typeDefs;
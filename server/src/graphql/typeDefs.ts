// A schema is a collection of type definitions (hence "typeDefs") that together define the "shape" of queries that are executed against your data.
const typeDefs = `#graphql
  type Product {
    name: String
    price: Float
  }
  type Query {
    products: [Product]
  }
`;
export default typeDefs;
const { gql } = require("apollo-server");

// GraphQL schema
exports.typeDefs = gql`
  type Query {
    hello: String! # ! means that it is required, not nullable in the resolver
    numberOfUsers: Int
    price: Float
    isActive: Boolean
    Array: [String]! # no ! means that it is not required, nullable in the resolver, to modify it use bang [String!]!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    id: ID!
    name: String!
    quantity: Int!
    description: String!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

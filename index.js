const { ApolloServer, gql } = require("apollo-server"); // initializing apollo server

// Scalar types String, Boolean, Int, Float, ID
// Object types: Query, Mutation, Subscription

const { products } = require("./products"); // import products from products.js

// GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String! # ! means that it is required, not nullable in the resolver
    numberOfUsers: Int
    price: Float
    isActive: Boolean
    Array: [String]! # no ! means that it is not required, nullable in the resolver, to modify it use bang [String!]!
    products: [Product!]!
    product(id: ID!): Product
  }
  type Product {
    id: ID!
    name: String!
    quantity: Int!
    description: String!
    image: String!
    price: Float!
    onSale: Boolean!
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    numberOfUsers: () => {
      return 10;
    },
    price: () => {
      return 10.99;
    },
    isActive: () => {
      return true;
    },
    Array: () => {
      return ["My", "amigo", null];
    },
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      const product = products.find((product) => product.id === args.id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    },
  },
};

// Binding types and resolvers to the server
const server = new ApolloServer({ typeDefs, resolvers });

// Starting the server and listening on port 4000  (http://localhost:4000) for incoming requests
// Just visit in the browser http://localhost:4000 to interact with the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

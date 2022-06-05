const { ApolloServer } = require("apollo-server"); // initializing apollo server

// Scalar types String, Boolean, Int, Float, ID
// Object types: Query, Mutation, Subscription

const { db } = require("./db"); // importing db
const { Mutation } = require("./resolvers/mutation"); // importing mutation resolver
const { typeDefs } = require("./schema"); // import schema from schema.js
const { Query } = require("./resolvers/Query"); // import Query resolver from Query.js
const { Product } = require("./resolvers/Product"); // import Product resolver from Product.js
const { Category } = require("./resolvers/Category"); // import Category resolver from Category.js

// Binding types and resolvers to the server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation,
  },
  context: {
    db,
  },
});

// Starting the server and listening on port 4000  (http://localhost:4000) for incoming requests
// Just visit in the browser http://localhost:4000 to interact with the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const { gql } = require("apollo-server");

// GraphQL schema
exports.typeDefs = gql`
  type Query {
    hello: String! # ! means that it is required, not nullable in the resolver
    numberOfUsers: Int
    price: Float
    isActive: Boolean
    Array: [String]! # no ! means that it is not required, nullable in the resolver, to modify it use bang [String!]!
    products(filter: ProductsFilterInput): [Product!]!
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
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  type Mutation {
    # create section
    addCategory(input: addCategoryInput!): Category!
    addProduct(input: addProductInput!): Product!
    addReview(input: addReviewInput!): Review!
    #  delete section
    deleteCategory(id: ID!): Category!
    deleteProduct(id: ID!): Product!
    deleteReview(id: ID!): Review!
    # update section
    updateCategory(id: ID!, input: updateCategoryInput!): Category!
    updateProduct(id: ID!, input: updateProductInput!): Product!
    updateReview(id: ID!, input: updateReviewInput!): Review!
  }

  input addCategoryInput {
    name: String!
  }

  input addProductInput {
    name: String!
    quantity: Int!
    description: String!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input addReviewInput {
    productId: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input updateCategoryInput {
    id: ID!
    name: String!
  }

  input updateProductInput {
    id: ID!
    name: String!
    quantity: Int!
    description: String!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input updateReviewInput {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;

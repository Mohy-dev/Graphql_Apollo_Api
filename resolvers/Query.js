const { categories, products } = require("../db");

// GraphQL resolvers
exports.Query = {
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
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args; // destructuring
    return categories.find((category) => category.id === id);
  },
};

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
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { id }, { db }) => {
    const product = db.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, args, { db }) => {
    const { id } = args; // destructuring
    return db.categories.find((category) => category.id === id);
  },
};

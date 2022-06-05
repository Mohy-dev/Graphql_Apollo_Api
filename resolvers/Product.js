exports.Product = {
  // category: (parent, args, context) equals to but destructed category: ({ categoryId }, args, { categories })
  category: ({ id: categoryId }, args, { db }) => {
    return db.categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};

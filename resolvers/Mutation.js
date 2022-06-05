const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: async (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: async (parent, { input }, { db }) => {
    const { name, quantity, description, image, price, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      quantity,
      description,
      image,
      price,
      onSale,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  addReview: async (parent, { input }, { db }) => {
    const { productId, date, title, comment, rating } = input;
    const newReview = {
      id: uuid(),
      productId,
      date,
      title,
      comment,
      rating,
    };
    db.reviews.push(newReview);
    return newReview;
  },
  deleteCategory: async (parent, { id }, { db }) => {
    const categoryIndex = db.categories.findIndex(
      (category) => category.id === id
    );
    if (categoryIndex === -1) {
      throw new Error("Category not found");
    }
    db.categories.splice(categoryIndex, 1);
    return db.categories;
  },
  deleteProduct: async (parent, { id }, { db }) => {
    const productIndex = db.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new Error("Product not found");
    }
    db.products.splice(productIndex, 1);
    return db.products;
  },
  updateCategory: async (parent, { id, input }, { db }) => {
    const categoryIndex = db.categories.findIndex(
      (category) => category.id === id
    );
    if (categoryIndex === -1) {
      throw new Error("Category not found");
    }
    const { name } = input;
    db.categories[categoryIndex].name = name;
    return db.categories[categoryIndex];
  },
  updateProduct: async (parent, { id, input }, { db }) => {
    const productIndex = db.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new Error("Product not found");
    }
    db.products[productIndex] = {
      ...db.products[productIndex],
      ...input,
    };
    return db.products[productIndex];
  },
  updateReview: async (parent, { id, input }, { db }) => {
    const reviewIndex = db.reviews.findIndex((review) => review.id === id);
    if (reviewIndex === -1) {
      throw new Error("Review not found");
    }
    db.reviews[reviewIndex] = {
      ...db.reviews[reviewIndex],
      ...input,
    };
    return db.reviews[reviewIndex];
  },
};

// const { User, UserSchema } = require('./user.model');

// function initModels(sequelize) {
//   User.init(UserSchema, User.config(sequelize));
// }

// module.exports = { initModels };
const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./products.model');
const { Category, CategorySchema } = require('./category.model');

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  // Definir asociaciones si existen
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = { initModels };

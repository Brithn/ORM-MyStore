// Index de los modelos
const { User, UserSchema } = require('./user.model');
const { Customer, CustomersSchema } = require('./customer.model');

function initModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomersSchema, Customer.config(sequelize));
}

module.exports = { initModels };

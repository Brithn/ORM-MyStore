const { Sequelize, Model, DataTypes } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const DISCOUNT_TABLE = 'orders_products';

const DiscountSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  porcentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Discount extends Model {
  static associate(models) {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DISCOUNT_TABLE,
      modelName: 'Discount',
      timestamps: false,
    };
  }
}
module.exports = { DISCOUNT_TABLE, Discount, DiscountSchema };

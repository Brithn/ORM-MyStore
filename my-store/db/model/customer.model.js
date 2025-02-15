// modelo customer
const { Sequelize, Model, DataTypes } = require('sequelize');
const CUSTOMER_TABLE = 'customers';
const CustomersSchema = {
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
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Customer extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}
module.exports = { CUSTOMER_TABLE, Customer, CustomersSchema };

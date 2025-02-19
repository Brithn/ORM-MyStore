'use strict';
const { CUSTOMER_TABLE } = require('./../model/customer.model');
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Añadir la columna si no existe
    await queryInterface.addColumn(CUSTOMER_TABLE, 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      unique: true,
    });

    // Cambiar la columna
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      unique: true,
    });
  },

  async down(queryInterface) {
    // Lógica de reversión, si es necesaria
  },
};

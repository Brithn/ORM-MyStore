'use strict';
const {
  ORDER_TABLE,
  OrderSchema,
} = require('./../model/order.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // Excluimos "total" de OrderSchema antes de crear la tabla
    const { total, ...restOfSchema } = OrderSchema;

    // Creamos la tabla sin la columna "total" que es virtual
    await queryInterface.createTable(ORDER_TABLE, restOfSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};

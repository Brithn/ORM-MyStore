const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const costumersRouter = require('./customer.router');
const orderRouter = require('./orders.router');
const discountRouter = require('./discount.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/costumers', costumersRouter);
  router.use('/orders', orderRouter);
  router.use('/discount', discountRouter);
}
module.exports = routerApi;

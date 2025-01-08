const express = require('express');
const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');
// const categoryRouter = require('./categories.router');
function routerApi(app){

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  // app.use('/users',usersRouter);
  // app.use('/category',categoryRouter)
}
module.exports = routerApi;

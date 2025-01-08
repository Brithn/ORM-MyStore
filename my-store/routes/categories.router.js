
const express = require('express'); // Importar Express
const router = express.Router();

//Envio por dos parametros
app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  });
});

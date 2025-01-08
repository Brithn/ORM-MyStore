const express = require('express'); // Importar Express
const routerApi = require('./routes'); // Importar Express
const { faker } = require('@faker-js/faker');

const app = express(); // Asignar Express a mi aplicación
const port = 3000; // Asignar el puerto donde se ejecutará el proyecto
app.use(express.json());
routerApi(app);

// Definir la ruta principal o raíz
app.get('/', (req, res) => {
  res.send('Hola servidor de Express');
});

// Nueva ruta
app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

// Ruta para obtener productos
app.get('/', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let index=0; index<limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url(),
      // image: faker.image.urlLoremFlickr({ category: 'product' }),
    });
  }
  res.json(products);
});


app.get('/filter', (req, res) => {
  res.send('Soy un filter');
});


// Ruta para obtener un producto por ID
app.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id: id, name: 'Producto 1', price: 200 });
});

app.get('/users',(req, res) => {
  const {limit,offset} =req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parámetros establecidos en el endpoint')
  }
});

//Envio por dos parametros
app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  });
});


// Escucha a través del puerto 3000
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
module.exports = routerApi;


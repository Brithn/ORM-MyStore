const express = require('express'); // Importar Express
const router = express.Router();
// sistema de rutas para los usuarios
router.get('/users',(req, res) => {
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

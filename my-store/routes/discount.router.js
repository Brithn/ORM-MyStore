const express = require('express');
const router = express.Router();
const discountsController = require('../controllers/discounts.controller').default;
const validateDiscount = require('../middlewares/discount.validator');

// Listar descuentos
router.get('/', discountsController.getAllDiscounts);

// Crear descuento con validación
router.post('/', validateDiscount, discountsController.createDiscount);

// Actualizar descuento con validación
router.put('/:id', validateDiscount, discountsController.updateDiscount);

// Eliminar descuento
router.delete('/:id', discountsController.deleteDiscount);

module.exports = router;

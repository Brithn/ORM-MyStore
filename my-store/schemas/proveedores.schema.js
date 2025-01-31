const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(255);
const ruc = Joi.string().length(13).pattern(/^\d+$/); 
const direccion = Joi.string().min(5);
const estado = Joi.boolean();

const createProveedorSchema = Joi.object({
  name: name.required(),
  ruc: ruc.required(),
  direccion: direccion.required(),
  estado: estado.default(true), // Valor por defecto como en la BD
});

const updateProveedorSchema = Joi.object({
  name: name,
  ruc: ruc,
  direccion: direccion,
  estado: estado,
});

const getProveedorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProveedorSchema, updateProveedorSchema, getProveedorSchema };

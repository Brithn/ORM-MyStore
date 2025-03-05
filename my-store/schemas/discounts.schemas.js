const Joi = require('joi');
// Datos del Customer
const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const percentage = Joi.number().integer();
const start_date = Joi.date();
const end_date = Joi.date();
const status = Joi.boolean();
// Datos del User
const userId = Joi.number().integer();
const password = Joi.string().min(8);
const email = Joi.string().email();
const name2 = Joi.string().min(10);

const getDiscountSchema = Joi.object({
  id: id.required(),
});

const createDiscountSchema = Joi.object({
  name: name.required(),
  percentage:percentage.required(),
  start_date:start_date.required(),
  end_date:end_date.required(),
  status: status.required(),

  user: Joi.object({
    email: email.required(),
    name: name2.required(),
    password: password.required(),
  }),
});

const updateDiscountSchema = Joi.object({
  name: name,
  percentage:percentage,
  start_date:start_date,
  end_date:end_date,
  status: atatus,
});

module.exports = {
  getDiscountSchema,
  createDiscountSchema,
  updateDiscountSchema,
};

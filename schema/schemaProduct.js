const Joi = require('joi');

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(10)
const price = Joi.number().integer().min(10)

const schemaProductCreate = Joi.object({
  name: name.required(),
  price: price.required()
})


const updateSchemaProduct = Joi.object({
  name: name,
  price: price
})


const getProductSchema = Joi.object({
  id: id.required()
})


module.exports = {
  schemaProductCreate,
  updateSchemaProduct,
  getProductSchema
}

const { User, UserSchema} = require('./user.model')
const { Client, ClientSchema} = require('../models/client.model')
const { Category, CategorySchema} = require('../models/client.model')
const { Product, ProductSchema} = require('../models/client.model')




function  setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Client.init(ClientSchema, Client.config(sequelize))
  Category.init(CategorySchema, Client.config(sequelize))
  Product.init(ProductSchema, Client.config(sequelize))





  User.associate(sequelize.models)
  Client.associate(sequelize.models)
  Category.associate(sequelize.models)
  Product.associate(sequelize.models)
}


module.exports = setupModels;

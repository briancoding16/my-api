const { User, UserSchema} = require('./user.model')
const { Client, ClientSchema} = require('../models/client.model')


function  setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Client.init(ClientSchema, Client.config(sequelize))


  Client.associate(sequelize.models)

}


module.exports = setupModels;

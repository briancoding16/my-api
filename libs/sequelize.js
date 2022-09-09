const { Sequelize } = require('sequelize')
const {config} = require('../config/config')
const setupModels = require('../db/index.js')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize  = new Sequelize (URI,{
  dialect: 'postgres',
  logging:false
})

setupModels(sequelize)

sequelize.sync()


module.exports = sequelize;

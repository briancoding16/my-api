const {config} = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`



module.exports = {
  development: {
    username: 'brian',
    password: 'admin123',
    database: 'my_app',
    URL: URI,
    dialect: 'postgres',
  },
  production: {
    username: 'brian',
    password: 'admin123',
    database: 'my_app',
    URL: URI,
    dialect: 'postgres',
  },
};

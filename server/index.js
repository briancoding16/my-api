const productsRouter = require('../routes/products')
const usersRouter = require('../routes/users')
const express = require('express');


function apiRouter (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
}

module.exports = apiRouter

const express = require('express');
const servicesUsers = require('../services/servicesUsers')
const router = express.Router()

router.get('/', async (req, res, next)=> {
 try {
  const getUsers = await servicesUsers.getAllUsers(req, res)
  return res.send({getUsers})
 } catch (error) {
  next(error)
 }
})


module.exports = router;

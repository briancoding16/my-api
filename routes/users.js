const express = require('express');
const servicesUsers = require('../services/servicesUsers')
const router = express.Router()

router.get('/', async (req, res)=> {
  const getUsers = await servicesUsers.getAllUsers(req, res)
  return getUsers
})


module.exports = router;

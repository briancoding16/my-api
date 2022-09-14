const express = require('express');
const servicesCategory = require('../services/servicesCategory')
const router = express.Router()
const {getCategory, createCategory,updateCategory } = require('../schema/schemaCategory')
const validatorHendler = require('../middleware/validator.hendler')



router.get('/', async(req, res, next)=>{

  try {
    const categories = await servicesCategory.allCategory()
    res.json(categories)
  } catch (error) {
    next(error)
  }

})


router.get('/:id', validatorHendler(getCategory, 'params'),
  async(req, res, next)=>{
  try {
    const { id } = req.params
    const category = await servicesCategory.oneCategory(id)
    res.json(category)
  } catch (error) {
    next(error)
  }

})


router.post('/', validatorHendler(createCategory, 'body'),
  async(req, res, next)=>{
  try {
    const body = req.body
    const newCategory = await servicesCategory.createCategory(body)
    res.json(newCategory)
  } catch (error) {
    next(error)
  }

})


router.patch('/:id',
  validatorHendler(getCategory, 'params'),
  validatorHendler(updateCategory, 'body'),
  async(req, res, next)=>{
  try {
    const { id } = req.params
    const body = req.body
    const updatesCategory = await servicesCategory.updateCategory(id, body)
    res.json(updatesCategory)
  } catch (error) {
    next(error)
  }
})




router.delete('/:id',
  async(req, res, next)=>{
  try {
    const { id } = req.params
    const categoryDelete = await servicesCategory.deleteCategory(id, body)
    res.json(categoryDelete)
  } catch (error) {
    next(error)
  }
})



module.exports = router;






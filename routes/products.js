const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHendler = require('../middleware/validator.hendler')
const {schemaProductCreate, updateSchemaProduct,getProductSchema} = require('../schema/schemaProduct')


router.get('/',  async (req, res, next)=> {
    try {
    const products = await productServices.getAllProducts(req, res)
    res.json(products)
    } catch (error) {
      next(error)
    }

})

router.get('/:id', validatorHendler(getProductSchema, 'params'),
  async(req, res)=> {
  const getOneProduct = await productServices.getOneProduct(req, res)
  return getOneProduct
})

router.post('/', validatorHendler(schemaProductCreate, 'body'),
 async (req, res)=>{
 const createProduct = await productServices.createnewProduct(req,res)
 return createProduct
})

router.patch('/:id',
  validatorHendler(getProductSchema, 'params'),
  validatorHendler(updateSchemaProduct, 'body'),
  async (req, res)=>{
  const updateProduct = await productServices.updateProduct(req, res)
  return updateProduct
})


router.delete('/:id',  (req, res)=>{
  productServices.deleteProduct(req, res)

})





module.exports = router;

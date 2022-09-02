const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()


router.get('/',  async (req, res)=> {
  const products = await productServices.getAllProducts(req, res)
  res.json(products)

})


router.post('/', async (req, res)=>{
 const createProduct = await productServices.createnewProduct(req,res)
 return createProduct
})

router.patch('/:id',  async (req, res)=>{
  const updateProduct = await productServices.updateProduct(req, res)
  res.json(updateProduct)
})


router.delete('/:id', async (req, res)=>{
  const updateproduct = await productServices.updateProduct(req, res)
  return updateproduct
})


router.get('/:id', async(req, res)=> {
  const getOneProduct = await productServices.getOneProduct(req, res)
  return getOneProduct
})


module.exports = router;

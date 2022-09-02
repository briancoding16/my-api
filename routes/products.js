const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()


router.get('/',  async (req, res, next)=> {
    try {
    const products = await productServices.getAllProducts(req, res)
    res.json(products)
    } catch (error) {
      next(error)
    }

})


router.post('/', async (req, res)=>{
 const createProduct = await productServices.createnewProduct(req,res)
 return createProduct
})

router.patch('/:id',  async (req, res)=>{
  const updateProduct = await productServices.updateProduct(req, res)
  return updateProduct
})


router.delete('/:id',  (req, res)=>{
  productServices.deleteProduct(req, res)

})


router.get('/:id', async(req, res)=> {
  const getOneProduct = await productServices.getOneProduct(req, res)
  console.log(getOneProduct)
  return getOneProduct
})


module.exports = router;

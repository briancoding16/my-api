const express = require('express');
const faker = require('faker');

const router = express.Router()


router.get('/', (req, res)=> {
  const products = []
  const {size} = req.query
  const limit = size || 5
  for(let index = 0;index<limit;index++) {
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)

})


router.post('/', (req, res)=>{
  const body = req.body
  console.log(body)
  res.json({
    ok:true,
    data: body
  })
})

router.patch('/:id', (req, res)=>{
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'success',
    product: body,
    id,
  })
})


router.delete('/:id', (req, res)=>{
  const {id} = req.params
  res.json({
    message: 'delete',
    id,
  })
})


router.get('/:id',(req, res)=> {
  const {id} = req.params
  res.json({
    'id': id,
    'name':'Teclado',
    'price':2000,
    'category': 'tecnology'
  })
})


module.exports = router;

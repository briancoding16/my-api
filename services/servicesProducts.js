const faker = require('faker');
const boom = require('@hapi/boom')
// import { v4 as uuidv4 } from 'uuid';

const getAllProducts =  (req, res) => {
  try {
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
    return products
  } catch (error) {
    console.log(error)
  }

}


const createnewProduct = (req, res) =>{

 try {
  const body = req.body
  res.json({
    ok:true,
    data: body
  })
 } catch (error) {
  console.log(error)
 }

}

const updateProduct = (req, res) =>{
  try {
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'success',
    product: body,
    id
  })
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = (req, res) => {
 try {
  const {id} = req.params
 res.json( {
    message: 'delete',
    id,
  })
 } catch (error) {
  console.log(error)
 }
}


const getOneProduct = (req, res) => {
 try {
  console.log(req.body)
  let {id } = req.params
  res.json({
    id,
  })
 } catch (error) {
  console.log(error)
 }
}




module.exports =
{
  getAllProducts,
  createnewProduct,
  updateProduct,
  deleteProduct,
  getOneProduct
}

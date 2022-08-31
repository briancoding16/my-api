const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000


app.get('/',(req, res)=> {
  res.send('Hola mundo desde mi ruta raiz')
})


app.get('/products', (req, res)=> {
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



app.get('/users', (req, res)=> {
  const {limit, offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay ningun parametro')
  }
})


app.get('/products/:id/products',(req, res)=> {
  const {id} = req.params
  res.json({
    'id': id,
    'name':'Teclado',
    'price':2000,
    'category': 'tecnology'
  })
})

app.listen(port, (req, res)=>{
  console.log(`Escuchando en el puerto ${port}`)
})



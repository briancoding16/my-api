const express = require('express');
const apiRouter = require('./server');
const app = express();
const port = 3000

app.use(express.json())

app.get('/',(req, res)=> {
  res.send('Hola mundo desde mi ruta raiz')
})

apiRouter(app)


app.listen(port, (req, res)=>{
  console.log(`Escuchando en el puerto ${port}`)
})

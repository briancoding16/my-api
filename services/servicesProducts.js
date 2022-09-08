const pool = require('../libs/postgres')


const getAllProducts = async (req, res) => {
  try {
    const query = 'SELECT * FROM tasks'
    const response = await pool.query(query)
    return response.rows
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

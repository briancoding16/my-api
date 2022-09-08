const pool = require('../libs/postgres')

const getAllUsers = async (req, res) =>{
  const query = 'SELECT * FROM  task '
  const {} =  await pool.query(query)
  return response.rows;
}


module.exports = {
  getAllUsers
}

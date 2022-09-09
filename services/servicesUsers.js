
const { boom } = require('@hapi/boom')
const getConnection = require('../libs/postgres')
const {models} = require('../libs/sequelize')


const getAllUsers = async () =>{
  const response = await models.User.findAll()
  return response
}

const findOne = async (id)=>{
 try {
  const user = await models.User.findByPk(id)
  if (!user) {
    throw boom.notFound('user not found')
  }
  return user
 } catch (error) {
  console.log(error)
 }
}


const createUser = async (body) => {
  try {
    console.log(body)
    const newUser = await models.User.create(body)
    console.log(newUser)
    return {
      user: newUser,
      message: 'User created'
    }
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (id, body)=>{
  try {
    const user = await models.User.findByPk(id)
    if (!user) {
      return {
        error: 'user not found'
      }
    }
    const response = await user.update(body)
    return {response}
  } catch (error) {
    console.log(error)
  }
}


const deleteUser = async (id)=>{
  try {
    const user = await models.User.findOne(id)
    await user.destroy()
    return {
      message: 'User delete',
      id
    }
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  findOne

}

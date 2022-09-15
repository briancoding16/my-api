const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE  = 'categories'

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false
  },

  createdaAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


  class Category extends Model {
    static associate(model){

    }


  static config(sequelize) {

    return {
      sequelize,
      tableName:CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }}


module.exports ={ Category,CategorySchema,CATEGORY_TABLE}

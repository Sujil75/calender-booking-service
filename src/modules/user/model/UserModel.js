const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../../../config/DbConnection')

const UserModel = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Other model options go here
    tableName: 'users',
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = {UserModel}
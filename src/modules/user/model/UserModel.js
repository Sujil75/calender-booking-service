const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConnection')

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
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
//   {
//     // Other model options go here
//     tableName: 'users',
//   },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = {User}
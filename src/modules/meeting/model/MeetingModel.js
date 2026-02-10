const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../../../config/DbConnection');
const {User} = require('../../user/model/UserModel')

const Meeting = sequelize.define(
  'Meeting',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

User.hasMany(Meeting, {foreignKey: "userId"})
Meeting.belongsTo(User, {foreignKey: "userId"})

module.exports = Meeting
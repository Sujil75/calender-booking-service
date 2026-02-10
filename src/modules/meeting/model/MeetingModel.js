const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../../../config/DbConnection');
const {UserModel} = require('../../user/model/UserModel')

const MeetingModel = sequelize.define(
  'Meeting',
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
  },{
       tableName: "meetings"
    }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

UserModel.hasMany(MeetingModel, {foreignKey: "userId"})
MeetingModel.belongsTo(UserModel, {foreignKey: "userId"})

module.exports = {MeetingModel}
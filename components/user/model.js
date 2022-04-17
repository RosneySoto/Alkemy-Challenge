const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class User extends Model {}
User.init({
    name:{
        type: DataTypes.STRING,
        require: true
    },
    lastName:{
        type: DataTypes.STRING,
        require: true
    },
    email:{
        type: DataTypes.STRING,
        require: true
    },
    password:{
        type: DataTypes.STRING,
        require: true
    }
},{
        sequelize,
        modelName: 'user'
    });

module.exports = User;
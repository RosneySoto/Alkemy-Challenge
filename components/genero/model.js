const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Gender extends Model {}
Gender.init({
    name:{
        type: DataTypes.STRING,
        require: true
    },
    image:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'gender',
    // timestamps: false,
});

module.exports = Gender;
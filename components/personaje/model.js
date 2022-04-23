const { Model, DataTypes} = require('sequelize');
const sequelize = require('../../db');
const Film = require('../peli-serie/model');

class Character extends Model {}
Character.init({
    image:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING,
        require: true
    },
    age:{
        type: DataTypes.STRING
    },
    weight:{
        type: DataTypes.STRING
    },
    history:{
        type: DataTypes.STRING,
        require: true
    }
},{
    sequelize,
    modelName: 'character',
    timestamps: false,
});

module.exports = Character;
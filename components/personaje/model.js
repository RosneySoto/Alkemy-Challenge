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
    modelName: 'character'
});

const Character_Films = sequelize.define('Character_Films', {}, {timestamps: false});
Character.belongsToMany(Film, {through: Character_Films});
Film.belongsToMany(Character, {through: Character_Films});

module.exports = Character;
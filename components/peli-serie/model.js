const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const Character = require('../personaje/model');

class Film extends Model {}
Film.init({
    image:{
        type: DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING,
        require: true
    },
    creationDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    calification:{
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'film'
});

// Film.belongsToMany(Character, {through: Character_Films});

module.exports = Film;
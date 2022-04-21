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
        type: DataTypes.INTEGER,
        validate: {min: 1, max: 5}
    }
},{
    sequelize,
    modelName: 'film',
    timestamps: false
});

module.exports = Film;
const Film = require('../peli-serie/model');
const Model = require('./model');
const { Sequelize } = require('sequelize');

function addCharacter (character){
    try {
        var filmsObject = [];

        character.films.forEach(function(f){
            let actualFilm = {
                image: f.image,
                title: f.title,
                creationDate: f.creationDate,
                calification: f.calification
                }
                filmsObject.push(actualFilm)
        });
        const newCharacter = Model.create({
            image: character.image,
            name: character.name,
            age: character.age,
            weight: character.weight,
            history: character.history,
            films: filmsObject
        },{
            include: Film,
        });
        return newCharacter;

    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Error al crear el personaje', detail: error };
    }
};

async function getAllCharacterOnlyImageandName(){
    const character = await Model.findAll(
        {
            attributes: ['image', 'name']
        });
    return character;
};

async function getAllCharacter(name, age, movies, weight){
    let charaterWhere = {};
    if(name)    
        charaterWhere.name = name;
    if (age)
        charaterWhere.age = age;
    if(weight)
        charaterWhere.weight = weight;
    
    let filmWhere = {};
    if(movies){
        filmWhere.id = movies
    }

    const character = await Model.findAll({
        where: charaterWhere,
        include: {
            model: Film,
            through: {
                attributes: []
            },
            where: filmWhere
        }
    });
    return character;
}

async function updateCharacter(character){
    return new Promise((resolve, reject) =>{
        const characterUpdate = Model.update({
            image: character.image,
            name: character.name,
            age: character.age,
            weight: character.weight,
            history: character.history
        },{
            where:{
                id: character.id
            }
        })
        resolve(characterUpdate)
    })
}

function deleteCharacter(id){
    return Model.destroy({
        where:{
            id: id
        }
    });
};

module.exports = {
    addCharacter,
    getAllCharacter,
    deleteCharacter,
    updateCharacter,
    getAllCharacterOnlyImageandName,
}
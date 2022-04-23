const Model = require('./model')
const Character = require('../personaje/model');
const Gender = require('../genero/model')
const { Sequelize } = require('sequelize');

function addFilm (film){
    try {
        var characterObject = [];
        var genderObject = [];

        film.characters.forEach(function (c){
            let altualCharacter = {
                image: c.image,
                name: c.name,
                age: c.age,
                weight: c.weight,
                history: c.history
            }
            characterObject.push(altualCharacter)
        });

        film.genders.forEach(function(g){
            let actualGender = {
                name: g.name,
                image: g.image
            }
            genderObject.push(actualGender)
        });
        const newFilm = Model.create({
            image: film.image,
            title: film.title,
            creationDate: film.creationDate,
            calification: film.calification,
            characters: characterObject,
            genders: genderObject
        },{
            include: [Character, Gender]
        })
        return newFilm;

    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Error al crear el personaje', detail: error };
    }
};

async function getAllFilms(title, id){

    let filmWhere = {};
    if(title)
        filmWhere.title = title;
    if(id)
        filmWhere.id = id;

    const film = await Model.findAll({
            where: filmWhere,
            order: [
                ['title', 'ASC']
            ],
            include:[{
                model: Character,
                through:{
                    attributes: []
                }
            },{
                model: Gender,
                attributes: ['name', 'image'],
                through:{
                    attributes: []
                }
            }]
        }
    );
    return film;
};

async function getAllFilmsOnlyImageandName(){
    const film = await Model.findAll(
        {
            attributes: ['image', 'title', 'creationDate']
        });
        return film
};

async function updateFilm(film){
    return new Promise((resolve, reject) =>{
        const updFilm = Model.update({
            image: film.image,
            title: film.title,
            creationDate: film.creationDate,
            calification: film.calification
        },{
            where:{
                id: film.id
            }
        })
        resolve(updFilm)
    });
};

function deleteFilm(id){
    return Model.destroy({
        where:{
            id: id
        }
    });
};

module.exports = {
    addFilm,
    getAllFilms,
    updateFilm,
    deleteFilm,
    getAllFilmsOnlyImageandName
}
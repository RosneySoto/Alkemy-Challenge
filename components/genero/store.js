const { Sequelize } = require('sequelize');
const Model = require('./model');
const Film = require('../peli-serie/model');


function addGender (gender){
    try {
        var filmsObject = [];

        gender.films.forEach(function(f){
            let actualFilm = {
                image: f.image,
                title: f.title,
                creationDate: f.creationDate,
                calification: f.calification
                }
                filmsObject.push(actualFilm)
        });
        const newGender = Model.create({
            name: gender.name,
            image: gender.image,
            films: filmsObject
        },{
            include: Film,
        });
        console.log(newGender)
        return newGender;
    } catch (error) {
        console.log(error);
        return { status: 500, message: 'Error al crear el genero nuevo', detail: error };
    }
};

async function getAllGender(name, id){
    let genderWhere = {};
        if(name)
            genderWhere.name = name;
        if(id)
        genderWhere.id = id    
        
    const genders = await Model.findAll({
        where: genderWhere,
        order:[
            ['name', 'ASC'],
            ['id', 'DESC']
        ],
        include:{
            model: Film,
            through: {
                attributes: []
            },
        }
    })
    return genders;
};

async function updateGender(gender){
    return new Promise((resolve, reject) => {
        const genderUpdate = Model.update({
            name: gender.name,
            image: gender.image
        },{
            where:{
                id: gender.id
            }
        })
        resolve(genderUpdate)
    });
};

function deleteGender(id){
    return Model.destroy({
        where:{
            id: id
        }
    });
};

module.exports = {
    addGender,
    getAllGender,
    updateGender,
    deleteGender,
}
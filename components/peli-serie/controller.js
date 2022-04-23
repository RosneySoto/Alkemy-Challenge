const res = require('express/lib/response');
const store = require('./store');

async function addFilm(film){
    const result = await store.addFilm(film);
    return result;
};

async function getAll(title, id){
    return new Promise((resolve, reject) => {
        resolve(store.getAllFilms(title, id));
    })
};

async function updateFilm(film){
    try {
        if(!film.title){
            return Promise.reject('Es obligatorio el titulo')
        }
        return new Promise((resolve, reject) =>{
            resolve(store.updateFilm(film));
        })
    } catch (error) {
        console.log(error);
    }
};

async function getAllFilmsOnlyImageandName(){
    return new Promise((resolve, reject) =>{
        resolve(store.getAllFilmsOnlyImageandName())
    });
};

async function deleteFilm(id){
    try {
        if(!id){
            return Promise.reject('Debe indicar un ID de una pelicula para eliminar')
        }
        return new Promise((resolve, reject) =>{
            resolve(store.deleteFilm(id))
        })
    } catch (error) {
        res.json(error)
        console.error(error)
    }
};

module.exports ={
    addFilm,
    getAll,
    updateFilm,
    deleteFilm,
    getAllFilmsOnlyImageandName
}
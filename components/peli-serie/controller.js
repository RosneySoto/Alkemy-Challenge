const res = require('express/lib/response');
const store = require('./store');

function addFilm(image, title, creationDate, calification){
    if(!title){
        return new Promise.reject('Debe contener un titulo')
    }
    const film = {
        image,
        title,
        creationDate,
        calification
    }
    return store.addFilm(film)
};

async function getAll(){
    return new Promise((resolve, reject) => {
        resolve(store.getAllFilms());
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
}
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

module.exports ={
    addFilm,
    getAll
}
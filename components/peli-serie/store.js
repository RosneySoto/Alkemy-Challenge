const Model = require('./model')

function addFilm (film){
    const newFilm = new Model(film);
    return newFilm.save();
};

async function getAllFilms(){
    const film = await Model.findAll();
    return film;
}

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
}
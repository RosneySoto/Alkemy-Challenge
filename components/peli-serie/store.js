const Model = require('./model')

function addFilm (film){
    const newFilm = new Model(film);
    return newFilm.save();
};

async function getAllFilms(){
    const film = await Model.findAll({
        include: [
            {
                association: Model.Character
            }
        ]
    });
    return film;
}


module.exports = {
    addFilm,
    getAllFilms,
}
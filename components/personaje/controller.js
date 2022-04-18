const store = require('./store');

function addCharacter(image, name, age, weight, history, filmId){
    if(!name || !history){
        return Promise.reject('Es obligatorio el nombre y la historia')
    }
    const character = {
        image,
        name,
        age,
        weight,
        history,
        filmId
    };
    return store.addCharacter(character);
};

async function getAll(){
    return new Promise((resolve, reject) => {
        resolve(store.getAllCharacter());
    })
};

function getCharacterByName(name){
    return store.getCharacterByName(name)
};

async function updateCharacter(character){
    try {
        if(!character.name || !character.history){
            console.log(character)
            return Promise.reject('Es obligatorio el nombre y la historia del personaje')
        }
        return new Promise((resolve, reject) =>{
            resolve(store.updateCharacter(character));
        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteCharacter(id){
    if(!id){
        reject('El ID indicado no existe')
        return false
    }
    return new Promise((resolve, reject) =>{
        const result = store.deleteCharacter(id)
        resolve(result)
    });
};

module.exports = {
    addCharacter,
    getAll,
    getCharacterByName,
    deleteCharacter,
    updateCharacter,
}
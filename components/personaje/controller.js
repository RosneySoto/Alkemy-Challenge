const store = require('./store');

async function addCharacter(character){
    const result = await store.addCharacter(character);
    return result;   
};

async function getAll(name, age, movies, weight ){
    return new Promise((resolve, reject) => {
        resolve(store.getAllCharacter(name, age, movies, weight));
    })
};

async function getAllOnlyNameandImage(){
    return new Promise((resolve, reject) => {
        resolve(store.getAllCharacterOnlyImageandName());
    })
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
    deleteCharacter,
    updateCharacter,
    getAllOnlyNameandImage,
}
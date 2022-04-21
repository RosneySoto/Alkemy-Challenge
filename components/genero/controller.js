const store = require('./store');

function addGender(name, image){
    try {
        const newGener = {
            name,
            image
        }
        return store.addGender(newGener);
    } catch (error) {
        console.error(error)
    }
};

async function getAllGender(){
    return new Promise((resolve, reject) =>{
        resolve(store.getAllGender())
    });
};

async function updateGender(gender){
    return new Promise((resolve, reject) =>{
        resolve(store.updateGender(gender))
    });
};

function deleteGender(id){
    if(!id){
        reject(`El ID ${id}, no existe en la base de datos`)
        return false
    }
    return new Promise((resolve, reject) => {
        resolve(store.deleteGender(id))
    });
};

module.exports = {
    addGender,
    getAllGender,
    updateGender,
    deleteGender,
}
const store = require('./store');

async function addGender(gender){
    const result = await store.addGender(gender);
    return result;
};

async function getAllGender(name, id){
    return new Promise((resolve, reject) =>{
        resolve(store.getAllGender(name, id))
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
const store = require('./store');

function addUser(name, lastName, email, password){
    if(!name || !lastName || !email || !password){
        return Promise.reject('Debe ingresar, nombre, apellido, email y password')
    }
    const user = {
        name,
        lastName,
        email,
        password
    };
    return store.addUser(user);
};

async function getAll(){
    return new Promise((resolve, reject) => {
        resolve(store.getAllUser());
    });
};

async function deleteUser(id){
    return new Promise((resolve, reject) =>{
        resolve(store.deleteUser(id))
    });
};

async function updateUser(user){
    try {
        if(!user){
            return Promise.reject('Es obligatorio el titulo')
        }
        return new Promise((resolve, reject) =>{
            resolve(store.updateUser(user));
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addUser,
    getAll,
    deleteUser,
    updateUser
}
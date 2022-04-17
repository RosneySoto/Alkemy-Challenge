const store = require('./store');

function addUser(name, lastname, email, password){
    if(!name || !lastname || !email || !password || !createdAt || !updatedAt){
        return Promise.reject('Debe ingresar, nombre, apellido, email y password')
    }
    const user = {
        name,
        lastname,
        email,
        password,
        createdAt,
        updatedAt
    };
    return store.addUser(user);
};

async function getAll(){
    return new Promise((resolve, reject) => {
        resolve(store.getAllUser());
    })
}

module.exports = {
    addUser,
    getAll,
}
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
    })
}

module.exports = {
    addUser,
    getAll,
}
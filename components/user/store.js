const Model = require('./model');

function addUser (user){
    const newUser = new Model(user);
    return newUser.save();
}

async function getAllUser(){
    const users = await Model.findAll();
    return users;
};

module.exports = {
    addUser,
    getAllUser,
}
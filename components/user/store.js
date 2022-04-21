const { update } = require('./model');
const Model = require('./model');

function addUser (user){
    const newUser = new Model(user);
    return newUser.save();
}

async function getAllUser(){
    const users = await Model.findAll();
    return users;
};

function deleteUser(id){
    return Model.destroy({
        where:{id: id}
    })
};

async function updateUser(user){ 
    return new Promise((resolve, reject) =>{
        const userUpdate = Model.update({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        },{
            where:{
                id: user.id
            }
        })
        resolve(userUpdate)
    })
}

module.exports = {
    addUser,
    getAllUser,
    deleteUser,
    updateUser,
}
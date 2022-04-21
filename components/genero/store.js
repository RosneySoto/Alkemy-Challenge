const Model = require('./model');

function addGender (gender){
    const newGender = new Model(gender);
    return newGender.save();
};

async function getAllGender(){
    const genders = await Model.findAll()
    return genders;
};

async function updateGender(gender){
    return new Promise((resolve, reject) => {
        const genderUpdate = Model.update({
            name: gender.name,
            image: gender.image
        },{
            where:{
                id: gender.id
            }
        })
        resolve(genderUpdate)
    });
};

function deleteGender(id){
    return Model.destroy({
        where:{
            id: id
        }
    });
};

module.exports = {
    addGender,
    getAllGender,
    updateGender,
    deleteGender,
}
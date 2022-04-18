const Model = require('./model');

function addCharacter (character){
    const newCharacter = new Model(character);
    return newCharacter.save();
};

async function getAllCharacter(){
    const character = await Model.findAll({
        include: [
            {
                association: Model.Film
            }
        ]
    });
    return character;
}

async function getCharacterByName(name){
    return new Promise((resolve, reject) => {
        const characterName = Model.findOne({name: name})
        resolve(characterName)
    });
};

async function updateCharacter(character){
    return new Promise((resolve, reject) =>{
        const characterUpdate = Model.update({
            image: character.image,
            name: character.name,
            age: character.age,
            weight: character.weight,
            history: character.history
        },{
            where:{
                id: character.id
            }
        })
        resolve(characterUpdate)
    })
}

function deleteCharacter(id){
    return Model.destroy({
        where:{
            id: id
        }
    });
};

module.exports = {
    addCharacter,
    getAllCharacter,
    getCharacterByName,
    deleteCharacter,
    updateCharacter
}
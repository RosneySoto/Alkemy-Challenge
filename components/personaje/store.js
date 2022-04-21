const Model = require('./model');

function addCharacter (character){
    try {
        const newCharacter = Model.create({
            image: character.image,
            name: character.name,
            age: character.age,
            weight: character.weight,
            history: character.history,
                films:[
                    {
                        image: character.image,
                        title: character.title,
                        creationDate: character.creationDate,
                        calification: character.calification,
                    }
                ]
        },{
            include: 'films'
        });
        return newCharacter;

    } catch (error) {
        console.log(error);
    return {
      status: 500,
      message: 'Error al crear el personaje',
      detail: error
    };
    }
    
    // const newCharacter = new Model(character);
    // return newCharacter.save();
};

async function getAllCharacterOnlyImageandName(){
    const character = await Model.findAll(
        {
            attributes: ['image', 'name']
        });
    return character;
};

async function getAllCharacter(){
    const character = await Model.findAll();
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
    updateCharacter,
    getAllCharacterOnlyImageandName,
}
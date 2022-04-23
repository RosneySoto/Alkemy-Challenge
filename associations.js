const Character = require('./components/personaje/model');
const Film = require('./components/peli-serie/model');
const Gender = require('./components/genero/model');

Character.belongsToMany(Film, { through: 'characters_films' });
Film.belongsToMany(Character, { through: 'characters_films' });

Gender.belongsToMany(Film, { through: 'genders_films' });
Film.belongsToMany(Gender, { through: 'genders_films' });
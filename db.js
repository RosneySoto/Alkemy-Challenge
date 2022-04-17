const { Sequelize } = require('sequelize');
const { database, dataBase } = require('./config');

const sequelize = new Sequelize(
    dataBase.database,
    dataBase.username,
    dataBase.password, {
        host: dataBase.host,
        dialect: "mysql"
    }
);

module.exports = sequelize;
const express = require('express');
const user = require('../components/user/network');
const character = require('../components/personaje/network');
const movies = require('../components/peli-serie/network');
const gender = require('../components/genero/network');

const routes = function(server){
    server.use('/user', user)
    server.use('/character', character)
    server.use('/movies', movies)
    server.use('/gender', gender)
}

module.exports = routes;
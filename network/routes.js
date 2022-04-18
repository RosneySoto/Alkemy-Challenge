const express = require('express');
const user = require('../components/user/network');
const character = require('../components/personaje/network');
const movies = require('../components/peli-serie/network');

const routes = function(server){
    server.use('/user', user)
    server.use('/character', character)
    server.use('/movies', movies)
}

module.exports = routes;
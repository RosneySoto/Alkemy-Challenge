const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res){
    controller.addCharacter(req.body)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Error al crear el perosnaje', 500, err)
        })
});

router.get('/', function(req, res){
  const name = req.query.name;
  const age = req.query.age;
  const movies = req.query.movies;
  const weight = req.query.weight;

    controller.getAll(name, age, movies, weight).then(data => {
        response.success(req, res, data, 200);
    })
    .catch(err => {
        response.error(req, res, 'Error al listar la lista de personajes', 500, err)
    })
});

router.get('/character', function(req, res){
    controller.getAllOnlyNameandImage()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al listar la lista de personajes', 500, err)
        })
});

router.patch('/', function(req, res){
    controller.updateCharacter(req.body)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al editar el perosnaje', 500, err)
        })
});

router.delete('/:id', function(req, res){
    controller.deleteCharacter(req.params.id)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al eliminar el personaje', 500, err)
        })
});

module.exports = router;
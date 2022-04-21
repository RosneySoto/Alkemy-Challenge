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
    controller.getAll()
        .then(data => {
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

router.get('/:name', function(req, res){
    controller.getCharacterByName(req.params.name)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al bucar el personaje por nombre', 500, err)
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
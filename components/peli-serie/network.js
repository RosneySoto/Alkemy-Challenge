const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', function(req, res){
    controller.addFilm(req.body)
            .then(data =>{
                response.success(req, res, data, 201)
            })
            .catch(err =>{
                response.error(req, res, 'Error al crear la pelicula o serie', 500, err)
            })
});

router.get('/', function(req, res){
    const title = req.query.title;
    const id = req.query.id;
    console.log(title)
    controller.getAll(title, id)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al listar las lpeliculas', 500, err)
        })
});

router.get('/movies', function(req, res){
    controller.getAllFilmsOnlyImageandName()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al listar las lpeliculas', 500, err)
        })
});

router.patch('/', function(req, res){
    controller.updateFilm(req.body)
        .then(data =>{
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error al editar la pelicula o serie', 500, err)
        })
});

router.delete('/:id', function(req, res){
    controller.deleteFilm(req.params.id)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err =>{
            response.error(req, res, 'Error al eliminar la pelicula', 500, err)
        })
});

module.exports = router;
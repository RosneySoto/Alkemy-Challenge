const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', function(req, res){
    controller.addGender(req.body)
        .then(data => {
            console.log(data)
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Error al crear el genero', 500, err)
        });
});

router.get('/', function(req, res){
    const name = req.query.name;
    const id = req.query.id;
    controller.getAllGender(name, id)
        .then(data =>{
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Error al listar los generos', 500, err)
        });
});

router.patch('/', function(req, res){
    controller.updateGender(req.body)
        .then(data =>{
            response.success(req, res, data, 200)
        })
        .catch(err =>{
            response.error(req, res, 'Error al editar', 500, err)
        })
});

router.delete('/:id', function(req, res){
    controller.deleteGender(req.params.id)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err =>{
            response.error(req, res, `Error al eliminar el ID ${id}`, 500, err)
        });
});

module.exports = router;
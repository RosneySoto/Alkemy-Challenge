const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const User = require('./model');
const controller = require('./controller');

router.post('/user', function(req, res){
    controller.addUser(req.body.name, req.body.lastname, req.body.email, req.body.password, req.body.createdAt, req.body.updatedAt)
    .then(data => {
        response.success(req, res, data, 201);
    })
    .catch(err => {
        response.error(req, res, 'Error al crear un usuario', 500, err)
    })
});

router.get('/', function(req, res){
    controller.getAll()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err => {
            response.error(req, res, 'Error en el network', 500, err)
        })
});

module.exports = router;
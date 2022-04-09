const express = require('express');
const app = express();
const server = require('http').Server(app);
const db = require('./db');
const bodyParser = require('body-parser');
const router = require('./network/routes');

db('mongodb+srv://admin:123456789*@cluster0.upw4q.mongodb.net/test');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

router(app);
app.use('/api', express.static('public'));


server.listen(8080, function(){
    console.log('Ejecutando en el puerto http://localhost:8080');
})
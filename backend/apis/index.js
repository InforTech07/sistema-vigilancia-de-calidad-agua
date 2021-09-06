const express = require('express');
const config = require('../config.js');
const usuario = require('./usuario/usuario.js')

const app = express();



app.use('/api/v1/usuario',usuario)



app.listen(config.api.port,()=>{
    console.log('api escuchando en el puerto',config.api.port)
})
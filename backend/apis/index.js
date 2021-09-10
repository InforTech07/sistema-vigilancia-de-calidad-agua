const express = require('express');
const cors = require('cors');
const config = require('../config.js');
const morgan = require('morgan');
const usuario = require('./usuario/usuario.js');
const inicio = require('./inicio/paginaInicio.js');


const app = express();

//configuraciones
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/inicio',inicio);
app.use('/api/v1/usuario',usuario);




app.listen(config.api.port,()=>{
    console.log('api escuchando en el puerto',config.api.port)
})
const express = require('express');
const respuesta = require('../../red/respuesta.js');
const {getPublicaciones}= require('./controlador.js')

const router = express.Router();

// rutas

router.get('/',inicio);



function inicio(req,res) {
    
    getPublicaciones().then((result)=>{
        respuesta.exito(req,res,result.recordset,200);
    }).catch(err=>{
        respuesta.error(req,res,err,500);
    });
}


module.exports = router;
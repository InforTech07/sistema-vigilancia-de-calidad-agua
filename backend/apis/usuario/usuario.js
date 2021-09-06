const express = require('express');
const respuesta = require('../../red/respuesta.js');

const router = express.Router();

// rutas

router.get('/',inicio);



function inicio(req,res,next) {
    
}


module.exports = router;
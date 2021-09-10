const express = require('express');
const respuesta = require('../../red/respuesta.js');
const {getConexion} = require('../../sqlserver/sqlserverconexion.js');
const router = express.Router();

// rutas

router.get('/',inicio);



async function inicio(req,res,next) {
  const pool = await getConexion();  
    const result = await pool.request().query("select * from dbo.tbl_publicacion");
    console.log(result);
}


module.exports = router;
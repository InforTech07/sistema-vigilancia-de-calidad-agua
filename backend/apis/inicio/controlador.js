const {getConexion} = require('../../sqlserver/sqlserverconexion.js');

async function getPublicaciones() {
    try{
        const pool = await getConexion();  
        return result = await pool.request().query("select * from dbo.tbl_publicacion");

    }catch (err){
        return err;
    } 
}

module.exports = {
    getPublicaciones
}
const sql = require('mssql');
const config = require('../config.js');

const dbConfiguracion = {
    user: config.sqlserver.dbUser,
    password: config.sqlserver.dbPassword,
    server: config.sqlserver.dbServer,
    database: config.sqlserver.dbDatabase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};

const getConexion = async()=>{
    try{
        const pool = await sql.connect(dbConfiguracion);
        return pool;
    }catch(error){
        console.error(error);
    }
}

module.exports={
    getConexion
}
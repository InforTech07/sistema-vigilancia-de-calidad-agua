module.exports = {
    api:{
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    sqlserver:{
        dbUser:'sa',
        dbPassword:'010991',
        dbServer:'localhost',
        dbDatabase:'CalidadAgua_db',
    }
}
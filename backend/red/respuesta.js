exports.exito = function (req, res, mensaje,estado) {
    let codEstado = estado || 200;
    let esMensaje = mensaje ||'';

    res.status(codEstado).send({
        error: false,
        status:codEstado,
        body:esMensaje,

    });
}

exports.error = function (req,res,mensaje,estado) {
    let codEstado = estado || 500;
    let esMensaje = mensaje || 'Internal server error';

    res.status(codEstado).send({
        error: false,
        status: codEstado,
        body:esMensaje,
    })
    
}
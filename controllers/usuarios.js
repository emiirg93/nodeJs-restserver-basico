const { response, request } = require('express');

const usuariosGET = (req = request, res = response) => {
    const { q, nombre = 'Emiliano Rago', apikey } = req.query;

    res.json({
        msg: 'GET API - controlador',
        q,
        nombre,
        apikey
    });
};

const usuariosPUT = (req = request, res = response) => {
    const { id } = req.params;

    res.status(400).json({
        msg: 'PUT API - controlador',
        id,
    });
};

const usuariosPOST = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'POST API - controlador',
        nombre,
        edad,
    });
};

const usuariosDELETE = (req = request, res = response) => {
    res.json({
        msg: 'DELETE API - controlador',
    });
};

const usuariosPATCH = (req = request, res = response) => {
    res.json({
        msg: 'PATCH API - controlador',
    });
};

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE,
    usuariosPATCH,
};

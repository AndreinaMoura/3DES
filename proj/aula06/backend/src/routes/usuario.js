const express = require('express');

const router = express.Router();

const usuario = require('../controller/usuario');

router.post('/usuarioCreate', usuario.create);
router.post('/usuarioLogin', usuario.login);

module.exports = router;
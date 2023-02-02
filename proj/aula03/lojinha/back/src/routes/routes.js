const express = require('express');

const router = express.Router();

const produto = require('../controller/produtos');
const setor = require('../controller/setores');
const vendedor = require('../controller/vendedores');

router.post('/produto', produto.createProduto);
router.post('/setor', setor.createSetores);
router.post('/vendedor', vendedor.createVendedores);

router.get('/produtos', produto.readAllP);
router.get('/setores', setor.readAllS);
router.get('/vendedores', vendedor.readAllV);

router.get('/produtos/:id', produto.readOneP);
router.get('/setores/:id', setor.readOneS);
router.get('/vendedores/:id', vendedor.readOneV);

module.exports = router;
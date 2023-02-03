const express = require('express');

const router = express.Router();

const produto = require('../controller/produtos');
const setor = require('../controller/setores');
const vendedor = require('../controller/vendedores');
const venda = require('../controller/vendas');
const detalhe = require('../controller/detalhes');

router.post('/produto', produto.createProduto);
router.post('/setor', setor.createSetores);
router.post('/vendedor', vendedor.createVendedores);
router.post('/venda', venda.createVendas);
router.post('/detalhe', detalhe.createDetalhes);

router.get('/produtos', produto.readAllP);
router.get('/setores', setor.readAllS);
router.get('/vendedores', vendedor.readAllV);
router.get('/vendas', venda.readAllVen);
router.get('/detalhes', detalhe.readAllD);

router.get('/produtos/:id', produto.readOneP);
router.get('/setores/:id', setor.readOneS);
router.get('/vendedores/:id', vendedor.readOneV);
router.get('/vendas/:id', venda.createVendas);
router.get('/detalhes/:id', detalhe.createDetalhes);

module.exports = router;
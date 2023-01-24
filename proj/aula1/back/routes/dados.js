const express = require('express');
const router = express.Router();

const dados = require('../controllers/dados');

router.post("/entregador", dados.novoEntregador);
router.get("/entregador/:entregador", dados.listarPedidosEntregador);
router.get("/entregador/:entregador", dados.listarPedidosExecucao);
router.get("/entregador/:entregador", dados.listarPedidosEntregues);
router.get("/cozinha", dados.listarTodosPedidos);
// router.delete("/pirateflix/:id", dados.excluirdados);

module.exports = router;
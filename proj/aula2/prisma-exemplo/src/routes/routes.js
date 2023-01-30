const express = require('express');

const router = express.Router();

const Funcionarios = require('../controller/funcionários');

router.get('/funcionarios', Funcionarios.read);
router.get('/funcionarios/:id', Funcionarios.readFunc);
router.post('/funcionarios', Funcionarios.create);
router.put('/funcionarios/:id', Funcionarios.update);
router.delete('/funcionarios/:id', Funcionarios.remove);

module.exports = router

// 192.168.56.1 ipv4
// prisma init --datasource-provider mysql
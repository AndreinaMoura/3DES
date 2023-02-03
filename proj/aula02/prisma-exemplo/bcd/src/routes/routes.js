const express = require('express');

const router = express.Router();

const tarefa = require('../controller/tarefas');

router.get('/tarefa', tarefa.read);
router.get('/tarefa/:id', tarefa.readFunc);
router.post('/tarefa', tarefa.create);
router.put('/tarefa/:id', tarefa.update);
router.delete('/tarefa/:id', tarefa.remove);

module.exports = router
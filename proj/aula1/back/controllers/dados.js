const dados = require('../models/dados');
const con = require('../DAO/dados.dao');
const novoEntregador = (req, res) => {
    con.query(dados.novoEntregador(req.body), (err, result) => {
        if (err == null)
            res.json("Entregador Cadastrado!").status(201).end();
        else
            if (err.sqlState == 23000)//Se o ni já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarPedidosEntregador = (req, res) => {
    con.query(dados.listarPedidosEntregador(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

// const excluirFilme = (req, res) => {
//     con.query(dados.excluirFilme(req.params), (err, result) => {
//         if (err == null)
//             if (result.affectedRows > 0)
//                 res.json("filme deletado").status(204).end();
//             else
//                 res.json("filme não encontrado").status(404).end();
//         else
//             res.status(400).json(err).end();
//     });
// }

const listarPedidosExecucao = (req, res) => {
    con.query(dados.listarPedidosExecucao(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarPedidosEntregues = (req, res) => {
    con.query(dados.listarPedidosEntregues(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarTodosPedidos = (req, res) => {
    con.query(dados.listarTodosPedidos(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    listarTodosPedidos,
    novoEntregador,
    listarPedidosEntregador,
    listarPedidosExecucao,
    listarPedidosEntregues
}
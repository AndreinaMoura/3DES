const listarTodosPedidos = () => {
    return `SELECT * FROM pedidos;`;
}
const listarPedidosEntregador = (model) => {
    return `SELECT * FROM pedidos WHERE entregador=${model.entregador};`;
}
const listarPedidosExecucao = () => {
    return `SELECT * FROM pedidos WHERE hora_fim ='00:00';`;
}
const listarPedidosEntregues = () => {
    return `SELECT * FROM pedidos WHERE hora_fim !='00:00';`;
}

// const excluir = (model) => {
//     return `DELETE FROM filmes WHERE id=${model.id};`;
// }

const novoEntregador = (model) => {
    return `INSERT INTO entregadores VALUES (default,'${model.nome}','${model.email}','${model.senha}','${model.veiculo}');`;
}

const novoCliente = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.nome}','${model.endereco}','${model.produto}','${model.data}','${model.hora_pedido}','${model.hora_entrega}','${model.hora_fim}','${model.entregador}');`;
}


module.exports = {
    listarTodosPedidos,
    // excluir,
    novoEntregador,
    listarPedidosEntregador,
    listarPedidosExecucao,
    listarPedidosEntregues,
    novoCliente
}
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



module.exports = {
    listarTodosPedidos,
    // excluir,
    novoEntregador,
    listarPedidosEntregador,
    listarPedidosExecucao,
    listarPedidosEntregues
}
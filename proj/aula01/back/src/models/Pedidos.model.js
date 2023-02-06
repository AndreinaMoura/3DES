
const novoPedido = (model) => {
    return `INSERT INTO pedidos VALUES (DEFAULT,'${model.Cliente}','${model.Endereco}','${model.Produto}',GETDATE(),GETTIME(),NULL,NULL,'${model.Entregador}')`;
}

const mostrarPedidos = () => {
    return `SELECT * FROM View_ListarPedidos`;
}

const mostrarProdutos = () => {
    return `SELECT * FROM View_ListarProdutos`;
}

const mostrarPedidoPorCliente = (model) => {
    return `SELECT * FROM pedidos WHERE Cliente LIKE '%${model.Cliente}%'`;
}

const PedidosEmExecucao = () => {
    return `SELECT * FROM View_PedidosEmExecucao`;
}

const PedidosParaEntrega = () => {
    return `SELECT * FROM View_PedidosParaEntrega`;
}

const atualizarPedidoPronto = (model) => {
    return `UPDATE pedidos SET 
                Hora_entrega = CURTIME() 
            WHERE Cliente LIKE '%${model.Cliente}%'`; 
}

const atualizarPedidoEntregue = (model) => {
    return `UPDATE pedidos SET 
                Hora_fim = CURTIME() 
            WHERE Cliente LIKE '%${model.Cliente}%'`;
}

const excluirPedido = (model) => {
    return `DELETE FROM pedidos WHERE Cliente LIKE '%${model.Cliente}%'`; 
}

module.exports = {
    novoPedido,
    mostrarPedidos,
    mostrarProdutos,
    mostrarPedidoPorCliente,
    PedidosEmExecucao,
    PedidosParaEntrega,
    atualizarPedidoPronto,
    atualizarPedidoEntregue,
    excluirPedido
}
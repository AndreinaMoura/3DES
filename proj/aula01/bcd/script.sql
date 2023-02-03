DROP DATABASE IF EXISTS dados;
CREATE DATABASE dados CHARSET= UTF8 COLLATE UTF8_GENERAL_CI;
USE dados;

CREATE TABLE entregadores(
    id_entregador INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    veiculo VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos(
    id_pedido INTEGER PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    produto VARCHAR(50) NOT NULL,
    data VARCHAR(10) NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME NULL,
    hora_fim TIME NULL,
    entregador INT(4) NOT NULL
);

-- Lista produtos
DROP VIEW IF EXISTS View_ListarProdutos;
CREATE VIEW View_ListarProdutos AS
SELECT produto FROM pedidos;

SELECT * FROM View_ListarProdutos;


-- Lista todos os pedidos
DROP VIEW IF EXISTS View_ListarPedidos;
CREATE VIEW View_ListarPedidos AS
SELECT * FROM pedidos;

SELECT * FROM View_ListarPedidos;

-- Lista pedidos em execução
DROP VIEW IF EXISTS View_PedidosEmExecucao;
CREATE VIEW View_PedidosEmExecucao AS
SELECT p.ID_Pedido, p.Cliente, p.Endereco, p.Produto, p.data, p.Hora_pedido, p.Hora_entrega, p.Hora_fim, e.nome 
FROM pedidos p INNER JOIN entregadores e 
ON p.Entregador = e.ID_Entregador
WHERE p.Hora_entrega is NULL
ORDER BY p.ID_Pedido;

SELECT * FROM View_PedidosEmExecucao;

-- Lista pedidos para entrega
DROP VIEW IF EXISTS View_PedidosParaEntrega;
CREATE VIEW View_PedidosParaEntrega AS
SELECT p.ID_Pedido, p.Cliente, p.Endereco, p.Produto, p.data, p.Hora_pedido, p.Hora_entrega, p.Hora_fim, e.nome 
FROM pedidos p INNER JOIN entregadores e 
ON p.Entregador = e.ID_Entregador
WHERE p.Hora_fim ='00:00:00' 
ORDER BY p.ID_Pedido;

SELECT * FROM View_PedidosParaEntrega;

DESCRIBE entregadores;
DESCRIBE pedidos;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/3DES/proj/aula1/csv/entregadores.csv'
LOAD DATA INFILE 'C:/Users/Andreina/Desktop/SENAI/3DES/proj/aula1/csv/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/3DES/proj/aula1/csv/pedidos.csv'
LOAD DATA INFILE 'C:/Users/Andreina/Desktop/SENAI/3DES/proj/aula1/csv/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
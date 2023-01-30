DROP DATABASE IF EXISTS dados;
CREATE DATABASE dados CHARSET= UTF8 COLLATE UTF8_GENERAL_CI;
USE dados;

CREATE TABLE entregadores(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    veiculo VARCHAR(100) NOT NULL
);

CREATE TABLE pedidos(
    id_pedido INTEGER PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(50) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    produto VARCHAR(30) NOT NULL,
    data VARCHAR(10) NOT NULL,
    hora_pedido VARCHAR(5) NOT NULL,
    hora_entrega VARCHAR(5) NOT NULL,
    hora_fim time,
    entregador VARCHAR(5) NOT NULL
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/3DES/proj/aula1/csv/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/senai/3DES/proj/aula1/csv/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
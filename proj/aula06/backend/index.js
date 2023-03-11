// const express = require('express');
// const cors = require('cors');

// const usuario = require('../backend/src/routes/usuario')

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use(usuario)

// app.listen(3000, () => { console.log("Funcionando na porta 3000"); })

const express = require('express');
const cors = require('cors');

const niveis = require('../backend/src/routes/nivel')
const usuario = require('../backend/src/routes/usuario')
const motorista = require('../backend/src/routes/motorista')
const Tveiculos = require('../backend/src/routes/tipoVeiculo')
const veiculos = require('../backend/src/routes/veiculos')
const operacoes = require('../backend/src/routes/operacoes')
const manutencao = require('../backend/src/routes/manutencao')
const Rmanutencao = require('../backend/src/routes/rManutencao')
const Roperacoes = require('../backend/src/routes/rOperacoes')

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     credentials: true,
//     optionSuccessStatus: 200
// }

app.use(cors());

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:3000");
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });

app.use(express.json());
app.use(niveis)
app.use(usuario)
app.use(motorista)
app.use(Tveiculos)
app.use(veiculos)
app.use(operacoes)
app.use(manutencao)
app.use(Rmanutencao)
app.use(Roperacoes)


app.listen(3000, () => { console.log("Funcionando na porta 3000"); })
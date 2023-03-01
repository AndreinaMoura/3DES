const express = require('express');
const cors = require('cors');

const usuario = require('../backend/src/routes/usuario')

const app = express();

app.use(cors());

app.use(express.json());

app.use(usuario)

app.listen(3000, () => { console.log("Funcionando na porta 3000"); })
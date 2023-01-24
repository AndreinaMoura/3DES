const express = require("express");
const cors = require("cors");

const dados = require('../back/routes/dados')

const app = express()
    .use(express.json())
    .use(cors())
    .use(dados)

app.listen(3000, () => {
    console.log('Funciona');
})
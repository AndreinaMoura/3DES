const { PrismaClient } = require('@prisma/client');
require("dotenv").config()

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });
    res.status(201).json(usuario).end();
}

const login = async (req, res) => {
    let usuario = await prisma.usuario.findMany({
        select: {
            id: true,
            nome: true,
            nivel: true
        },
        where: {
            AND:[
                {email:req.body.email},
                {senha:req.body.senha}
            ]
        }
    });
    if(usuario.length == 0) {
        res.status(400).json({"Msg":"Usuario ou Senha Inválidos"})
    }else {
        res.status(201).json(usuario[0]).end();
    }
}


module.exports = {
    create,
    login

}
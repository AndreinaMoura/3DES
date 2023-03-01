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
        where: {
            AND:[
                {email:req.body.email},
                {senha:req.body.senha}
            ]
        }
    });
    res.status(201).json(usuario).end();
}


module.exports = {
    create,
    // read,
    // readOne,
    // update,
    // remove,
    login

}
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createSetores = async (req, res) => {
    let setores = await prisma.Setor.create({
        data: req.body
    });

    res.status(200).json(setores).end();
}

const readOneS = async (req, res) => {
    let setores = await prisma.Setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            nome: true,
            comissao: true,
            produtos: true,
            vendedores: true
        }
    });

    res.status(200).json(setores).end();
}

const readAllS = async (req, res) => {
    let setores = await prisma.Setor.findMany()

    res.status(200).json(setores).end();
}

module.exports = {
    createSetores,
    readAllS,
    readOneS
}
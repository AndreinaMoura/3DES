const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createProduto = async (req, res) => {
    let produtos = await prisma.Produtos.create({
        data: req.body
    });

    res.status(200).json(produtos).end();
}

const readOneP = async (req, res) => {
    let produtos = await prisma.Produtos.findUnique({
        where: {
            id: Number(req.params.id)
        },
    });

    res.status(200).json(produtos).end();
}

const readAllP = async (req, res) => {
    let produtos = await prisma.Produtos.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    createProduto,
    readAllP,
    readOneP
}
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createDetalhes = async (req, res) => {
    let detalhes = await prisma.Detalhe.create({
        data: req.body
    });

    res.status(200).json(detalhes).end();
}

const readOneD = async (req, res) => {
    let detalhes = await prisma.Detalhe.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_produto: true,
            id_venda: true,
            quantidade: true,
            vendas: true,
            produtos: true
        }
    });

    res.status(200).json(detalhes).end();
}

const readAllD = async (req, res) => {
    let detalhes = await prisma.Detalhe.findMany()

    res.status(200).json(detalhes).end();
}

module.exports = {
    createDetalhes,
    readAllD,
    readOneD
}
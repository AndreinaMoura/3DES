const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendas = async (req, res) => {
    let vendas = await prisma.Vendas.create({
        data: req.body
    });

    res.status(200).json(vendas).end();
}

const readOneVen = async (req, res) => {
    let vendas = await prisma.Vendas.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            data: true,
            vendedor_id: true,
            vendedores: true,
            vendas: true
        }
    });

    res.status(200).json(vendas).end();
}

const readAllVen = async (req, res) => {
    let vendas = await prisma.Vendas.findMany()

    res.status(200).json(vendas).end();
}

module.exports = {
    createVendas,
    readAllVen,
    readOneVen
}
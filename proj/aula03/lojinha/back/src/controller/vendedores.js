const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendedores = async (req, res) => {
    let vendedores = await prisma.Vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedores).end();
}

const readOneV = async (req, res) => {
    let vendedores = await prisma.Vendedor.findUnique({
        where: {
            id: Number(req.params.id)
        },
    });

    res.status(200).json(vendedores).end();
}

const readAllV = async (req, res) => {
    let vendedores = await prisma.Vendedor.findMany();

    res.status(200).json(vendedores).end();
}

module.exports = {
    createVendedores,
    readAllV,
    readOneV
}
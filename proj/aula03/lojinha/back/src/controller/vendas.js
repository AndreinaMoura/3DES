const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendas = async (req, res) => {
    let vendas = await prisma.Vendas.create({
        data: {
            vendedor_id : req.body.vendedor_id,
            
        }
    });

    let idzinho = await prisma.$queryRaw`SELECT LAST_INSERT_ID()`;
    let ultimo_id = idzinho[0][`LAST_INSERT_ID()`];
    let maisDadinhos = req.body.detalhes;

    maisDadinhos.forEach(async nod =>{
        nod.id_venda = Number(ultimo_id);
    })

    let detalhes = await prisma.detalhe.createMany({
        data: maisDadinhos
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
            detalhe: true
        }
    });

    res.status(200).json(vendas).end();
}

const readAllVen = async (req, res) => {
    let vendas = await prisma.vendas.findMany({
        select: {
            id: true,
            data: true,
            vendedor_id: true,
            vendedores: true,
            detalhe: true
        }
    })

    res.status(200).json(vendas).end();
}

module.exports = {
    createVendas,
    readAllVen,
    readOneVen
}
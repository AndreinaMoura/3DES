// npm i @prisma/client
// import {PrismaClient} from '@prisma/client'
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) =>{
    // res.status(200).send("Create").end();
    const info = req.body;
    info.nascimento = new Date(req.body.nascimento);

    const funcionario = await prisma.funcionario.create({
        data: req.body
    });
    res.status(200).json(funcionario).end();
}

const read = async (req, res) =>{
    // res.status(200).send("Read").end();
    const funcionario = await prisma.funcionario.findMany();

    res.status(200).json(funcionario).end();
}

const readFunc = async (req, res) =>{
    const funcionario = await prisma.funcionario.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(funcionario).end();
}

const update = async (req, res) =>{
    // res.status(200).send("Update").end();
    const funcionario = await prisma.funcionario.update({
        where: { id: Number(req.params.id) },
        data: req.body
    });

    res.status(200).json(funcionario).end();
}

const remove = async (req, res) =>{
    // res.status(200).send("Delete").end();
    const funcionario = await prisma.funcionario.delete({
        where: { 
            id: Number(req.params.id) 
        }
    });

    res.status(200).json(funcionario).end();
}

module.exports = {
    create,
    read,
    readFunc,
    update,
    remove
}
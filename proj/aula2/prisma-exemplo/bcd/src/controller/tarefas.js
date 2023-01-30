const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) =>{
    const tarefa = await prisma.tarefas.create({
        data: req.body
    });
    res.status(200).json(tarefa).end();
}

const read = async (req, res) =>{
    const tarefa = await prisma.tarefas.findMany();

    res.status(200).json(tarefa).end();
}

const readFunc = async (req, res) =>{
    const tarefa = await prisma.tarefas.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(tarefa).end();
}

const update = async (req, res) =>{
    const tarefa = await prisma.tarefas.update({
        where: { id: Number(req.params.id) },
        data: req.body
    });

    res.status(200).json(tarefa).end();
}

const remove = async (req, res) =>{
    const tarefa = await prisma.tarefas.delete({
        where: { 
            id: Number(req.params.id) 
        }
    });

    res.status(200).json(tarefa).end();
}

module.exports = {
    create,
    read,
    readFunc,
    update,
    remove
}
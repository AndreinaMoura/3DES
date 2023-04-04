-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nivel` INTEGER NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nivel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nivel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ocupado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_veiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `tipo` INTEGER NOT NULL,
    `uso` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `veiculos_placa_key`(`placa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `veiculo` INTEGER NOT NULL,
    `motorista` INTEGER NOT NULL,
    `data_saida` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descricao` VARCHAR(191) NOT NULL,
    `data_retorno` DATETIME(3) NULL,
    `concluidas` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `veiculo` INTEGER NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `valor` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data_fim` DATETIME(3) NULL,
    `concluidas` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relatorio_manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manutencao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relatorio_operacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `operacoes` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_nivel_fkey` FOREIGN KEY (`nivel`) REFERENCES `nivel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `veiculos` ADD CONSTRAINT `veiculos_tipo_fkey` FOREIGN KEY (`tipo`) REFERENCES `tipo_veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operacoes` ADD CONSTRAINT `operacoes_veiculo_fkey` FOREIGN KEY (`veiculo`) REFERENCES `veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operacoes` ADD CONSTRAINT `operacoes_motorista_fkey` FOREIGN KEY (`motorista`) REFERENCES `motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `manutencao` ADD CONSTRAINT `manutencao_veiculo_fkey` FOREIGN KEY (`veiculo`) REFERENCES `veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `relatorio_manutencao` ADD CONSTRAINT `relatorio_manutencao_manutencao_fkey` FOREIGN KEY (`manutencao`) REFERENCES `manutencao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `relatorio_operacao` ADD CONSTRAINT `relatorio_operacao_operacoes_fkey` FOREIGN KEY (`operacoes`) REFERENCES `operacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

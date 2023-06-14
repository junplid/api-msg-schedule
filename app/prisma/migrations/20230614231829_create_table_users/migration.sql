-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(50) NOT NULL,
    `full_name` VARCHAR(200) NOT NULL,
    `whatsapp` VARCHAR(15) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `type` VARCHAR(5) NOT NULL,
    `code` VARCHAR(5) NULL,
    `available` INTEGER NULL DEFAULT 0,
    `payday` DATETIME(3) NULL,
    `due_date` DATETIME(3) NULL,
    `createAt` DATETIME(3) NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_whatsapp_key`(`whatsapp`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

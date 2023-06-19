-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `whatsapp` VARCHAR(15) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `invoice` VARCHAR(191) NULL DEFAULT 'PENDING',
    `dueDate` DATETIME(3) NOT NULL,
    `comments` VARCHAR(191) NOT NULL,
    `planId` INTEGER NOT NULL,

    UNIQUE INDEX `customers_login_key`(`login`),
    UNIQUE INDEX `customers_planId_key`(`planId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `plans`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DECIMAL(5, 2) NOT NULL,
    `payday` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `customers_planId_fkey` ON `customers`(`planId`);

-- CreateIndex
CREATE INDEX `customers_productId_fkey` ON `customers`(`productId`);

-- CreateIndex
CREATE INDEX `customers_userId_fkey` ON `customers`(`userId`);

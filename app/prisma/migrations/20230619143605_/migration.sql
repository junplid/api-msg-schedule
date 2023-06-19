/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[messageId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `messageId` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customers` ADD COLUMN `messageId` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `messagesOnCustomer` (
    `messageId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,

    PRIMARY KEY (`messageId`, `customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `customers_productId_key` ON `customers`(`productId`);

-- CreateIndex
CREATE UNIQUE INDEX `customers_messageId_key` ON `customers`(`messageId`);

-- CreateIndex
CREATE INDEX `customers_productId_planId_idx` ON `customers`(`productId`, `planId`);

-- AddForeignKey
ALTER TABLE `messagesOnCustomer` ADD CONSTRAINT `messagesOnCustomer_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `messages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messagesOnCustomer` ADD CONSTRAINT `messagesOnCustomer_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `customers_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

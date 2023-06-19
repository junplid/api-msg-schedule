/*
  Warnings:

  - You are about to drop the column `user_key` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `user_key` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `users` table. All the data in the column will be lost.
  - Added the required column `userId` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_user_key_fkey`;

-- DropForeignKey
ALTER TABLE `plans` DROP FOREIGN KEY `plans_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_user_key_fkey`;

-- DropIndex
DROP INDEX `users_key_key` ON `users`;

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `user_key`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `plans` DROP COLUMN `product_id`,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `user_key`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `key`;

-- CreateIndex
CREATE INDEX `plans_productId_idx` ON `plans`(`productId`);

-- CreateIndex
CREATE INDEX `products_userId_idx` ON `products`(`userId`);

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plans` ADD CONSTRAINT `plans_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

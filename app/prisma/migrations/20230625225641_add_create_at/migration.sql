/*
  Warnings:

  - Made the column `createAt` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customers` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `products` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

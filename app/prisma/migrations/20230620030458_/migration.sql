/*
  Warnings:

  - You are about to drop the column `messageId` on the `customers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `customers_messageId_key` ON `customers`;

-- AlterTable
ALTER TABLE `customers` DROP COLUMN `messageId`;

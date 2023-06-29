/*
  Warnings:

  - Added the required column `type_transation` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payments` ADD COLUMN `type_transation` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - Added the required column `name` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payments` ADD COLUMN `name` VARCHAR(191) NOT NULL;

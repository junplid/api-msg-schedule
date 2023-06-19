/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

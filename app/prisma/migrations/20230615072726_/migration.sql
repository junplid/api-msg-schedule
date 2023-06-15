/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `users_key_key` ON `users`(`key`);

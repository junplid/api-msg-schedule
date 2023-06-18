-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `days` INTEGER NOT NULL,
    `user_key` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `messages_user_key_key`(`user_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_user_key_fkey` FOREIGN KEY (`user_key`) REFERENCES `users`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

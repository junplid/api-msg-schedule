-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `messages_user_key_fkey`;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(5, 2) NOT NULL,
    `user_key` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `products_id_key`(`id`),
    UNIQUE INDEX `products_user_key_key`(`user_key`),
    INDEX `products_user_key_idx`(`user_key`),
    PRIMARY KEY (`id`, `user_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(5, 2) NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `plans_product_id_idx`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_user_key_fkey` FOREIGN KEY (`user_key`) REFERENCES `users`(`key`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_user_key_fkey` FOREIGN KEY (`user_key`) REFERENCES `users`(`key`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plans` ADD CONSTRAINT `plans_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

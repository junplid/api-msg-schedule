-- DropForeignKey
ALTER TABLE `messagesOnCustomer` DROP FOREIGN KEY `messagesOnCustomer_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `messagesOnCustomer` DROP FOREIGN KEY `messagesOnCustomer_messageId_fkey`;

-- AddForeignKey
ALTER TABLE `messagesOnCustomer` ADD CONSTRAINT `messagesOnCustomer_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `messages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messagesOnCustomer` ADD CONSTRAINT `messagesOnCustomer_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

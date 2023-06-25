-- AlterTable
ALTER TABLE `customers` MODIFY `login` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `dueDate` DATETIME(3) NULL,
    MODIFY `comments` VARCHAR(191) NULL,
    MODIFY `productId` INTEGER NULL;

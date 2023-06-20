-- CreateIndex
CREATE INDEX `customers_productId_planId_userId_idx` ON `customers`(`productId`, `planId`, `userId`);

-- AlterTable
ALTER TABLE `Story` ADD COLUMN `summary` TEXT NULL,
    ADD COLUMN `summaryCompletedAt` DATETIME(3) NULL,
    ADD COLUMN `summaryRequestedAt` DATETIME(3) NULL;

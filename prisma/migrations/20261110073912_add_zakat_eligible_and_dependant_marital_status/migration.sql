-- AlterTable
ALTER TABLE `surveys`
  ADD COLUMN `zakat_eligible` BOOLEAN NULL DEFAULT false AFTER `food_security`;

-- AlterTable
ALTER TABLE `dependants`
  ADD COLUMN `marital_status` VARCHAR(30) NULL AFTER `gender`;

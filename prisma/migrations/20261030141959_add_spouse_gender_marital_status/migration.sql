-- AlterTable
-- Fixes a bug: the survey form has always collected Spouse Gender and
-- Spouse Marital status (the Person component is shared between head and
-- spouse), but these two columns were never created, so Prisma's write
-- whitelist silently dropped them on every save. head_gender/
-- head_marital_status already existed; these are their spouse counterparts.
ALTER TABLE `surveys`
  ADD COLUMN `spouse_gender` VARCHAR(30) NULL AFTER `spouse_age`,
  ADD COLUMN `spouse_marital_status` VARCHAR(30) NULL AFTER `spouse_gender`;

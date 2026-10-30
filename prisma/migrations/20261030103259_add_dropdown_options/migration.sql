-- CreateTable
CREATE TABLE `dropdown_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(40) NOT NULL,
    `value` VARCHAR(150) NOT NULL,
    `sort_order` INTEGER NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `dropdown_options_category_idx`(`category`),
    UNIQUE INDEX `dropdown_options_category_value_key`(`category`, `value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

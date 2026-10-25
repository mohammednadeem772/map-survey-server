-- CreateTable
CREATE TABLE `areas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(120) NOT NULL,
    `ward_code` VARCHAR(50) NOT NULL,
    `target_households` INTEGER NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `areas_ward_code_key`(`ward_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(120) NOT NULL,
    `email` VARCHAR(180) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `role` ENUM('ADMIN', 'SUPERVISOR', 'SURVEYOR') NOT NULL,
    `area_id` INTEGER NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surveys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `survey_code` VARCHAR(40) NOT NULL,
    `area_id` INTEGER NOT NULL,
    `surveyor_id` INTEGER NOT NULL,
    `status` ENUM('DRAFT', 'SUBMITTED', 'VERIFIED', 'RETURNED') NOT NULL DEFAULT 'DRAFT',
    `consent_given` BOOLEAN NOT NULL DEFAULT false,
    `head_name` VARCHAR(120) NOT NULL,
    `head_age` INTEGER NULL,
    `head_gender` VARCHAR(30) NULL,
    `head_marital_status` VARCHAR(30) NULL,
    `head_education` VARCHAR(80) NULL,
    `head_occupation` VARCHAR(100) NULL,
    `head_skill` VARCHAR(150) NULL,
    `head_namaz` VARCHAR(30) NULL,
    `head_income` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `address` TEXT NOT NULL,
    `phone` VARCHAR(30) NULL,
    `latitude` DECIMAL(10, 7) NULL,
    `longitude` DECIMAL(10, 7) NULL,
    `spouse_name` VARCHAR(120) NULL,
    `spouse_age` INTEGER NULL,
    `spouse_education` VARCHAR(80) NULL,
    `spouse_occupation` VARCHAR(100) NULL,
    `spouse_skill` VARCHAR(150) NULL,
    `spouse_namaz` VARCHAR(30) NULL,
    `spouse_income` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `house_tenure` VARCHAR(40) NULL,
    `house_condition` VARCHAR(50) NULL,
    `rooms` INTEGER NULL,
    `toilet_access` VARCHAR(40) NULL,
    `drinking_water` VARCHAR(50) NULL,
    `electricity_access` VARCHAR(30) NULL,
    `loan_types` JSON NULL,
    `loan_amount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `govt_scheme_availed` BOOLEAN NOT NULL DEFAULT false,
    `govt_scheme_names` TEXT NULL,
    `govt_scheme_amount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `bedridden` BOOLEAN NOT NULL DEFAULT false,
    `bedridden_monthly_expense` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `ration_card` BOOLEAN NOT NULL DEFAULT false,
    `aadhaar_status` VARCHAR(30) NULL,
    `health_card` BOOLEAN NOT NULL DEFAULT false,
    `bank_account` BOOLEAN NOT NULL DEFAULT false,
    `voter_id_status` VARCHAR(40) NULL,
    `vehicles` JSON NULL,
    `fridge` BOOLEAN NOT NULL DEFAULT false,
    `television` BOOLEAN NOT NULL DEFAULT false,
    `tv_connection` VARCHAR(30) NULL,
    `tv_type` VARCHAR(30) NULL,
    `washing_machine` BOOLEAN NOT NULL DEFAULT false,
    `smartphone_access` VARCHAR(50) NULL,
    `internet_access` VARCHAR(30) NULL,
    `monthly_household_income` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `monthly_household_expense` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `food_security` VARCHAR(40) NULL,
    `vulnerable_category` JSON NULL,
    `notes` TEXT NULL,
    `surveyed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `surveys_survey_code_key`(`survey_code`),
    INDEX `surveys_area_id_idx`(`area_id`),
    INDEX `surveys_surveyor_id_idx`(`surveyor_id`),
    INDEX `surveys_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dependants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `survey_id` INTEGER NOT NULL,
    `name` VARCHAR(120) NOT NULL,
    `age` INTEGER NULL,
    `relationship` VARCHAR(40) NULL,
    `gender` VARCHAR(30) NULL,
    `member_type` ENUM('STUDENT', 'WORKING', 'DEPENDANT') NOT NULL,
    `education` VARCHAR(100) NULL,
    `institution` VARCHAR(150) NULL,
    `part_time_job` BOOLEAN NOT NULL DEFAULT false,
    `scholarship_availed` VARCHAR(150) NULL,
    `occupation` VARCHAR(100) NULL,
    `skill` VARCHAR(150) NULL,
    `namaz` VARCHAR(30) NULL,
    `income` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `disability_or_health_need` VARCHAR(200) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chart_configs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(120) NOT NULL,
    `metric_key` VARCHAR(80) NOT NULL,
    `chart_type` ENUM('bar', 'pie', 'line') NOT NULL DEFAULT 'bar',
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `display_order` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `areas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `surveys` ADD CONSTRAINT `surveys_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `areas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `surveys` ADD CONSTRAINT `surveys_surveyor_id_fkey` FOREIGN KEY (`surveyor_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dependants` ADD CONSTRAINT `dependants_survey_id_fkey` FOREIGN KEY (`survey_id`) REFERENCES `surveys`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

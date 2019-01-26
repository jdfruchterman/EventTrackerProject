-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema maintenancedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `maintenancedb` ;

-- -----------------------------------------------------
-- Schema maintenancedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `maintenancedb` DEFAULT CHARACTER SET utf8 ;
USE `maintenancedb` ;

-- -----------------------------------------------------
-- Table `maintenancedb`.`maintenance_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `maintenancedb`.`maintenance_item` ;

CREATE TABLE IF NOT EXISTS `maintenancedb`.`maintenance_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1000) NULL,
  `price` DECIMAL(7,2) NULL,
  `hours` DECIMAL(3,1) NULL,
  `performed_by` VARCHAR(45) NULL,
  `miles` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `vehicle` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS maintenanceuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'maintenanceuser'@'localhost' IDENTIFIED BY 'Dr34dn4ught';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `maintenancedb`.* TO 'maintenanceuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `maintenancedb`.`maintenance_item`
-- -----------------------------------------------------
START TRANSACTION;
USE `maintenancedb`;
INSERT INTO `maintenancedb`.`maintenance_item` (`id`, `title`, `category`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (1, 'Oil Change', 'Preventative Maintenance', '5w-30 Mobil 1 Full Synthetic, Purolator Filter', 30.87, .75, 'Jimmy', 155000, '2018-09-08', '2000 Toyota 4Runner');
INSERT INTO `maintenancedb`.`maintenance_item` (`id`, `title`, `category`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (2, 'Supercharger Install', 'Modification', 'Installed 1st gen trd supercharger', 1500, 8, 'Jimmy', 130000, '2017-07-19', '2000 Toyota 4Runner');

COMMIT;


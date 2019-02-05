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
-- Table `category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `maintenance_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `maintenance_item` ;

CREATE TABLE IF NOT EXISTS `maintenance_item` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `category_id` INT NOT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  `price` DECIMAL(7,2) NULL DEFAULT NULL,
  `hours` DECIMAL(3,1) NULL DEFAULT NULL,
  `performed_by` VARCHAR(45) NULL DEFAULT NULL,
  `miles` INT(11) NOT NULL,
  `date` DATETIME NOT NULL,
  `vehicle` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC),
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS maintenanceuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'maintenanceuser'@'localhost' IDENTIFIED BY 'Dr34dn4ught';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'maintenanceuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `category`
-- -----------------------------------------------------
START TRANSACTION;
USE `maintenancedb`;
INSERT INTO `category` (`id`, `name`) VALUES (1, 'Preventative Maintenance');
INSERT INTO `category` (`id`, `name`) VALUES (2, 'Repair');
INSERT INTO `category` (`id`, `name`) VALUES (3, 'Modification');
INSERT INTO `category` (`id`, `name`) VALUES (4, 'Repair/Modification');
INSERT INTO `category` (`id`, `name`) VALUES (5, 'Accessories');
INSERT INTO `category` (`id`, `name`) VALUES (6, 'Mileage Snapshot');
INSERT INTO `category` (`id`, `name`) VALUES (7, 'Restoration/Trim');
INSERT INTO `category` (`id`, `name`) VALUES (8, 'Miscellaneous');

COMMIT;


-- -----------------------------------------------------
-- Data for table `maintenance_item`
-- -----------------------------------------------------
START TRANSACTION;
USE `maintenancedb`;
INSERT INTO `maintenance_item` (`id`, `title`, `category_id`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (1, 'Oil Change', 1, '5w-30 mobil 1 full synthetic, mobil 1 filter, aa gasket (1.93)', 37.00, 1, 'Jimmy', 120,145, '2019-02-02', '2005 Toyota Corolla XRS');
INSERT INTO `maintenance_item` (`id`, `title`, `category_id`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (2, 'Dome Light Lens', 7, 'dorman lens', 6.97, .01, 'Jimmy', 235,000, '2018-03-28', '1986 Toyota MR2');
INSERT INTO `maintenance_item` (`id`, `title`, `category_id`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (3, 'Fog Lights', 3, 'nilight 2 pcs 18w flood, nilight 12v harness, led cover', 29.88, 1.5, 'Jimmy', 235,000, '2018-04-02', '1986 Toyota MR2');
INSERT INTO `maintenance_item` (`id`, `title`, `category_id`, `description`, `price`, `hours`, `performed_by`, `miles`, `date`, `vehicle`) VALUES (4, 'Tincup', 6, 'Tincup pass, met will oliver', 0, 0, 'Jimmy', 156,000, '2018-08-18', '2000 Toyota 4Runner');

COMMIT;


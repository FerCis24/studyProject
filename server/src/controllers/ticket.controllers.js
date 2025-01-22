const connection = require("../db/db.js");

const ticket = (req, res) => {};

module.exports = { ticket };


//QUERY CREATING NEW TABLE
// CREATE TABLE `tienda`.`tickets` (
//     `idtickets` INT NOT NULL AUTO_INCREMENT,
//     `producto` VARCHAR(255) NULL,
//     `monto` DECIMAL(2) NULL,
//     `userId` VARCHAR(45) NOT NULL,
//     PRIMARY KEY (`idtickets`));

//QUERY RELATED TABLES
// ALTER TABLE `tienda`.`tickets` 
// ADD INDEX `userId_idx` (`userId` ASC) VISIBLE;
// ;
// ALTER TABLE `tienda`.`tickets` 
// ADD CONSTRAINT `userId`
//   FOREIGN KEY (`userId`)
//   REFERENCES `tienda`.`usuarios` (`userName`)
//   ON DELETE NO ACTION
//   ON UPDATE NO ACTION;


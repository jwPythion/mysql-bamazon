DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;



CREATE TABLE Auction(
  'item_id' INT NOT NULL AUTO_INCREMENT,
  'product_name' VARCHAR(100) NOT NULL,
  'department_name' VARCHAR(100) NOT NULL,
  `Price` Decimal (10,2) NOT NULL,
  `stock_quantity` DECIMAL (10) NOT NULL,
    PRIMARY KEY (`Position`)
);


INSERT INTO Auction ("product_nameame", "department_name", "Price", "stock_quantity")
VALUES ('Mandolin', 'Instruments', '120.50', '57'),
('MacBookPro', 'Computers', '1800.50', '100'),
('Lightsaber', 'Magical Weapons', '100000.25', '7'),
('Magic Staff', 'Magical Weapons', '50000.75', '10'),
('Clarinet', 'Instruments', '250.50', '100'),
('Trumpet', 'Instruments', '300.00', '7'),
('Windows Tablet', 'Computers', '700.45', '39'),
('iPad', 'Computers', '800.50', '25'),
('One Ring', 'Magical Weapons', '10000000.25', '1'),
('Lute', 'Instruments', '455.75', '17');

SELECT * FROM Auction;




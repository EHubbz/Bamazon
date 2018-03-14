DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price INT (10,2) NOT NULL,
	stock_quantity INT(100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Linen Duvet-White", "Bedding", 120.00, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beeswax Candle", "Home Accents", 28.00, 9);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Himalayan Salt Lamp", "Health&Wellness", 39.00, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Kettle", "Kitchen", 46.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wormwood Soup Ladle", "Kitchen", 8.00, 11);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2x4 Jute Rug", "Rugs", 21.00, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sea Sponge Loofa", "Bath", 11.00, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vintage Walnut Dresser", "Furniture", 1300.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cherry Blossom Kimono", "Lingerie", 69.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("7oz English Rose Hand Cream", "Beauty", 18.00, 10);



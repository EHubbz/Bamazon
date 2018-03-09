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

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES ();

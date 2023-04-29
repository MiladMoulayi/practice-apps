CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS responses (

  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY

);

CREATE TABLE IF NOT EXISTS users (

  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address_line_one VARCHAR(255) NOT NULL,
  address_line_two VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip_code VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  credit_card_num VARCHAR(255) NOT NULL,
  expiration_date VARCHAR(255) NOT NULL,
  cvv VARCHAR(255) NOT NULL,
  billing_zip VARCHAR(255) NOT NULL
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

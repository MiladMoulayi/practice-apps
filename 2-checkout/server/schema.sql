CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS responses (

  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY

);

CREATE TABLE IF NOT EXISTS users (

  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(50) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  address_line_one VARCHAR(50) NOT NULL,
  address_line_two VARCHAR(50) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip_code VARCHAR(5) NOT NULL,
  phone_number VARCHAR(12) NOT NULL,
  credit_card_num VARCHAR(19) NOT NULL,
  expiration_date VARCHAR(5) NOT NULL,
  cvv VARCHAR(3) NOT NULL,
  billing_zip VARCHAR(5) NOT NULL
)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

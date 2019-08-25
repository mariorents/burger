DROP DATABASE IF EXISTS burgers_db; 
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id int auto_increment,
    burger_name varchar(100),
    devoured boolean DEFAULT false, 
    Primary key (id)
);


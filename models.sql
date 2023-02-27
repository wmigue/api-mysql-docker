create database mariadb;

show databases;

use mariadb;

use database mariadb;

create table personajes(
    id int primary key auto_increment,
    name varchar(100)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

insert into personajes(name) values ('subzero')
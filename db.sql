CREATE DATABASE young_reader;

USE young_reader;

DROP TABLE young_user;

CREATE TABLE young_user(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255),
    data_de_nascimento DATE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255)
);

SELECT * FROM young_user;



DROP TABLE young_favoritos;

CREATE TABLE young_favoritos(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_user INT NOT NULL,
	id_book VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES young_user(id)
);

DROP TABLE young_favoritos;

SELECT * FROM young_favoritos;


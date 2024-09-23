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

DROP TABLE young_categorias;
	
CREATE TABLE young_categorias(
	id_book INT PRIMARY KEY AUTO_INCREMENT,
    classificação INT,
    genero VARCHAR(255)
);

SELECT * FROM young_categorias;

DROP TABLE young_favoritos;

CREATE TABLE young_favoritos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	id_book INT PRIMARY KEY AUTO_INCREMENT,
    estrelas INT,
    FOREIGN KEY (id) REFERENCES young_user(id)
);

SELECT * FROM young_favoritos;



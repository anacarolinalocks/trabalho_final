CREATE DATABASE young_reader;

USE young_reader;

DROP TABLE young_user;

CREATE TABLE young_user(
	id INT PRIMARY KEY,
	name VARCHAR(255),
    data_de_nascimento DATE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255)
);

SELECT * FROM young_user;
	
CREATE TABLE young_categorias(
	id_book INT,
    classificação INT,
    genero VARCHAR(255)
);

SELECT * FROM young_categorias;

CREATE TABLE young_favoritos(
	id_book INT,
    estrelas INT
);

SELECT * FROM young_favoritos;



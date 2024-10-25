const connection = require('../config/db');
// const { response } = require('../app');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const { id_user, id_book, titulo, thumbnail } = request.body; // Obtenha os dados corretos
    const params = [id_user, id_book, titulo, thumbnail]; // Crie o array com os dados

    const query = "INSERT INTO young_favoritos(id_user, id_book, titulo, thumbnail) VALUES (?, ?, ?, ?)";
    
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso!",
                data: results
            });
        } else {
            console.log(err);
            response.status(400).json({
                success: false,
                message: "Ops, deu problema!",
                sql: err
            });
        }
    });
}

async function storeTask(request, response){

    const params = Array(request.body.id, request.body.nome)
    console.log(request.body)
 
    const query = "INSERT INTO young_favoritos(id_book, titulo) values(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            console.log(err)
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    sql: err
                })
        }
    })
}

module.exports = {
    storeTask
}


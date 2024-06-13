const connection = require('../config/db');
// const { response } = require('../app');
const dotenv = require('dotenv').config();

async function storeTask(request, response){

    const params = Array(request.body.id_livro, request.body.nome_livro)
    console.log(params)
 
    const query = "INSERT INTO young_favoritos(id_book, nome_livro) values(?,?)";

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


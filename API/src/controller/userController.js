const connection = require('../config/db');
const dotenv = require('dotenv').config();
async function storeUser(req, res){

    const params = Array(
        req.body.nome,
        req.body.email,
        req.body.senha
    );
    console.log(req.body)

    const query = "INSERT INTO young_user(name, email, senha) VALUES(?, ?, ?)";

    connection.query(query, params, (err, results) =>{
        if(results){
            res
            .status(201)
            .json({
                success: true,
                message: "Success",
                data: results
            })
        }else{
            res
            .status(400)
            .json({
                success: false,
                message:"Error",
                sql: err
            })
        }
    })
}


async function getUser(req, res){
    const { email, senha } = req.body;

    const query = "SELECT * FROM young_user where email = ? AND senha = ?";
    const params = [email, senha];

    connection.query(query, params, (err, results) => {
        if(results.length > 0){
            res.status(200).json({
                success: true,
                message: "Login bem-sucedido",
                data: results[0] // Retorna o usuário encontrado, incluindo o ID
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Credenciais inválidas"
            });
        }
    });
}

module.exports = {
    storeUser,
    getUser
}
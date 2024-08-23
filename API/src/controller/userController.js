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

    const query = "SELECT email, senha FROM young_user where email = ?";
    
    const params = Array(
        req.body.email,
        req.body.senha
    );

    connection.query(query, params, (err, results) =>{
        if(results.length > 0){
            console.log(results)
            if(req.body.senha == results[0].senha) {
                res
            .status(201)
            .json({
                success: true,
                message: "Success",
                data: results
            })
            } else {
                res
            .status(400)
            .json({
                success: true,
                message: "Senha inválida",
                data: results
            })
            }
            
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
module.exports = {
    storeUser,
    getUser
}
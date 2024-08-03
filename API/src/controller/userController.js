const connection = require('../config/db');
const dotenv = require('dotenv').config();
async function storeUser(req, res){

    const parms = Array(
        req.body.name,
        req.body.email,
        req.body.senha
    );

    const query = "INSERT INSERT young_user(name, email, senha) VALUES(?, ?, ?)";

    connection.query(query, parms, (err, results) =>{
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
                seccess: false,
                message:"Error",
                sql: err
            })
        }
    })
}

module.exports = {
    storeUser
}
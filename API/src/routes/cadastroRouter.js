const { Router } = require('express');
const router = Router();
const{storeUser, getUser} = require("../controller/userController")

/**
 * @swagger
 * /get/user:
 *  post:
 *    summary: Requere as informações de cadastro do usuário
 *    responses:
 *      201:
 *        description: Array com informações do usuário
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post("/get/user", getUser)

/**
 * @swagger
 * /cadastro:
 *  post:
 *    summary: Cria a conta de um usuário
 *    responses:
 *      201:
 *        description: Cadastrado (nome, data, email, senha) com successo
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post("/cadastro",storeUser) 

module.exports = router;

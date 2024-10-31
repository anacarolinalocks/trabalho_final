const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/dbController');
const {storeUser} = require('../controller/userController');

/**
 * @swagger
 * /store/book:
 *  post:
 *    summary: Requere as informações sobre os livros da api
 *    responses:
 *      201:
 *        description: Array com informações dos livros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/store/book', storeTask);

/**
 * @swagger
 * /store/user:
 *  post:
 *    summary: Salva as informações do usuário
 *    responses:
 *      201:
 *        description: Cadastrado com successo
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/store/user', storeUser);

module.exports = router;
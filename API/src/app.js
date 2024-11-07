const express = require('express');
const dotenv = require('dotenv').config();
const taskRouter = require('./routes/dbRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const favoritosRouter = require('./routes/favoritosRouter.js'); 
const cors = require('cors');
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API Braining",
        version: "1.0.0",
        description: "API CRUD para gerenciar rotas de dados do usuário e desbloqueio de níveis",
      },
      servers: [{ url: "http://localhost:3003" }],
    },
    apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);
app.use('/api', cadastroRouter);
app.use('/api', favoritosRouter);

module.exports = app;
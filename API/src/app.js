const express = require('express');
const dotenv = require('dotenv').config();
const taskRouter = require('./routes/dbRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);
app.use('/api', cadastroRouter);

module.exports = app;
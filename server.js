const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o BD
mongoose.connect(
    'mongodb+srv://renatodcr:Re196012@renatodcr-3715e.gcp.mongodb.net/nodeapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
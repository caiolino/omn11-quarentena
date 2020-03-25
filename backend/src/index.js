const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Faz o express converter json em Objetos Javascript
app.use(routes);

app.listen(3000);

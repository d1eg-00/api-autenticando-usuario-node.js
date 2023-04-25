const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const porta = 443;



app.listen(porta, () => {console.log('Servidor Rodando!')})
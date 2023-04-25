const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const porta = 443;

app.use(session({secret:1234567890}))

let login = 'admin';
let senha = '1234';

app.engine('html', require('ejs').renderFile)
app.set('view wngine', 'html')
app.set('views', patch.join(__dirname, './'))

app.get('./', (req,res) => {
  if(req.session.login){
    res.render('logado')
  }
  else{
    res.render('home')
  }
})

app.listen(porta, () => {console.log('Servidor Rodando!')})
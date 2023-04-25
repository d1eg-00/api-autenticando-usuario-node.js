const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const porta = 443

app.use(session({secret:1234567890}))

app.use(bodyParser.urlencoded({extended: true}))

let login = 'admin'
let senha = '1234'

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/'))

app.get('/', (req,res) => {
  if(req.session.login){
    res.render('logado')
    console.log('Usuário logado: ' + req.session.login)
  }
  else{
    res.render('home')
  }
})

app.post('/', (req,res) => {
  if (req.body.password == senha && req.body.login == login){
    console.log('Usuários logado com sucesso!')
    req.session.login = login
  res.sender('logado')
  }
  else{
  res.render('home')  
  }
})

app.listen(porta, () => {console.log('Servidor Rodando!')})
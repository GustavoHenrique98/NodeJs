//Utilizando o morgan para armazenar um registro de logs.

const express = require('express');
const app = express();
//Importando o morgan para escutar todos os requests 
var morgan = require('morgan');
const port = 3000;

app.use(morgan('Método = :method | Status = :status | Url = :url'))
app.get('/',(req,res)=>{
    res.status(200).send('<h1>  Testando a middleware morgan </h1>')
})
app.listen(port,()=>{
    console.log('rodando!');
})
//Utilizando o morgan para armazenar um registro de logs.

const express = require('express');
const app = express();
//Importando o morgan para escutar todos os requests 
var morgan = require('morgan');
const port = 3000;

app.use(morgan('Método = :method | Status = :status | Url = :url'));

app.get('/',(req,res)=>{
    res.status(200).send('<h1> Olá mundo! </h1>')
})

app.get('/ola/:nome',(req,res)=>{
    res.send(`Olá ${req.params.nome}`)
})

app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send(`<h1> Olá! ${req.params.nome} aluno da ${req.params.empresa} </h1>`)
})
//Trabalhando com parâmetros de rotas.
app.get('/soma/:n1/:n2',(req,res)=>{
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    res.send(`Resultado da soma dos parâmetros ${n1+n2}`);
})
app.use((req,res)=>{
    res.status(400).send('Erro!! Página não encontrada')
})

app.listen(port,()=>{
    console.log('rodando!');
})
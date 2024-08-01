//Utilizando a importação para incorparar nas rotas
//Importando as funções para serem usadas nas roas.
const express = require('express');
const {somar,subtrair} = require('./funcoes.js')
const app = express();

app.get('/distancia/:pontoa.:pontob',(req,res)=>{
    const calculoDistancia = parseInt(req.params.pontoa) - parseInt(req.params.pontob);
    res.send(`O resultado da distancia entre ${req.params.pontoa} e ${req.params.pontob} é : ${calculoDistancia}`);
})

app.get('/add/:n1-:n2',(req,res)=>{
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    res.send(`<h1> O resultado da soma dos parâmetros foi de ${somar(n1,n2)}</h1>`)
})

app.get('/sub/:n1-:n2',(req,res)=>{
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    res.send(`<h1> O resultado da subtração dos parâmetros foi de ${subtrair(n1,n2)}</h1>`)
})

app.listen(3000,()=>{
    console.log(`Servidor rodando em : http://localhost:3000`);
})
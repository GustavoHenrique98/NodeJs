//Para criamos servidores com mais facilidade
//Utilizamos a framework express do node js e minimalista.
//Que permite realizar a criação do servidor de maneira mais fácil.

/* Criando um servidor simples com express */;


const express = require('express');
const app = express();
//Criando rotas que retornam respostas

//Rotas 
app.get('/',(req,res)=>{
    res.status(200).send('<h1> Olá mundo!!</h1>');
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>acerca de eeeeereee</h1>')
})

//O app.use nesse caso está funcionndo caso seja uma rota inexistente.
app.use((req,res)=>{
    res.status(404).send('Erro!!!');
})
app.listen(3000,()=>{
    console.log('Servidor rodando em http://localhost:3000')
})
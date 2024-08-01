//Utilizando o morgan para armazenar um registro de logs.
//Exercicios simples com parâmetros.

const express = require('express');
const app = express();
const port = 3000;


//Simulando api de clientes.

const clientes = [
    {id:1 , nome:'João' , telefone:'11111' , email:'joão@example.com'},
    {id:2 , nome:'Gustavo' , telefone:'22222' , email:'Gustavo@example.com'},
    {id:3 , nome:'Carlos' , telefone:'333333' , email:'Carlos@example.com'},
    {id:4 , nome:'Heveny' , telefone:'444444' , email:'Heveny@example.com'},
    {id:5 , nome:'Ricardo' , telefone:'55555' , email:'Ricardo@example.com'}
]


//rota para o total de clientes
app.get('/total__clientes',(req,res)=>{
    res.send(`Total de clientes ${clientes.length}`);
})

app.get('/cliente/:id',(req,res)=>{
    const idCliente = parseInt(req.params.id);
    const cliente = clientes.find(function(c){
        return c.id === idCliente;
    })
    //Se o cliente não existe
    if(!cliente){
        res.send(`Cliente não existe!`);
    }else{
        res.json(cliente);
    }
})


app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
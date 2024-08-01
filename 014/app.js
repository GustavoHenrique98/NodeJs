//Nesta aula trabalhamos com rotas em links (a) em Html

const express = require('express');
const app = express();
const port = 4000;

//Adicionando rotas.

app.get('/',(req,res)=>{
    res.status(200).sendFile('views/home.html',{root: __dirname});
})

app.get('/about',(req,res)=>{
    res.status(200).sendFile('views/about.html',{root: __dirname});
})

//fazendo redirecionamento para a rota about
app.get('/sobre',(req,res)=>{
    res.redirect('/about');
})

app.get('/services',(req,res)=>{
    res.status(200).sendFile('views/services.html' ,{root: __dirname});
})

app.use((req,res)=>{
    res.status(404).sendFile('views/erro.html' ,{root: __dirname});
})


app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
    
});
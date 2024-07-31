const express = require('express');
const app = express();
const port = 4000;
//Nesta aula iremos retornar HTML como resposta utilizando o método get.

//Rotas
app.get('/',(req,res)=>{
    res.status(200).sendFile('views/home.html',{root: __dirname})
});

app.get('/services',(req,res)=>{
    res.status(200).sendFile('views/services.html',{root: __dirname})
});

app.get('/about',(req,res)=>{
    res.status(200).sendFile('views/about.html',{root: __dirname})
});

app.use((req,res)=>{
    res.status(404).sendFile('views/erro.html',{root: __dirname})
});


app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:3000/`)
}); 
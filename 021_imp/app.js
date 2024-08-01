//Criando uma API utilizando node js

//Criando o servidor
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const mysqlConfig = require('./mysqlConfig.js');
const cors = require('cors');
const functions = require('./functions.js');

//Criar a ligação do banco de dados.
const conection = mysql.createConnection(mysqlConfig);

//Conection
conection.connect(error=>{
    if(error){
        console.log(`Erro na conexão com o mysql : ${error.stack}`);
        return
    }

    console.log(`Conexão efetuada com sucesso!!`);
})

//Rotas
app.use(cors());

app.get('/',(req,res)=>{
    //Otimizando nossas respostas utilizando as funções exportadas do arquivo functions.
    conection.query('SELECT * FROM tasks',(err,results)=>{
        let response = null;
        if(err){
            response = functions.response('Error!!!',`Erro:${err.msg}`,null);
            res.json(response);
        }else{
            response = functions.response('Sucess!!!','Obtenção dos dados efetivada com sucesso! ',results);
            res.json(response)
        }
    })
})














app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})
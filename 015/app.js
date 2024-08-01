//Sobre middlewares

/* Middlewares  
São partes de código executado entre o request
e a construção do response.
*/

const express = require('express');
const app = express();
const port = 3000;
//Utilizando a middleware para ser executada antes da rota 
//Basicamente conseguimos definir ações antes de determinada rota ser chamada pelo servidor.
app.use((req,res,next)   =>{
   console.log('Teste');
   next();
})

app.use((req,res,next)   =>{
    req.requestTime = Date.now()
    next();
 })

app.get('/',(req,res) =>{
    console.log(req.requestTime)
    res.send('<h1>Teste da middleware</h1>');
    
})

app.listen(port,()=>{
    console.log('rodando!');
})
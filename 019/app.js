const express = require('express');
const app = express();

app.get('/distancia/:pontoa.:pontob',(req,res)=>{
    const calculoDistancia = parseInt(req.params.pontoa) - parseInt(req.params.pontob);
    res.send(`O resultado da distancia entre ${req.params.pontoa} e ${req.params.pontob} é : ${calculoDistancia}`);
})


app.listen(3000,()=>{
    console.log(`Servidor rodando em : http://localhost:3000`);
})
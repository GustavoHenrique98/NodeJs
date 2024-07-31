//Criando servidor com nodejs nativo e fazendo retornar html

//Primeiro precisamos importar o módulo http
const http = require('http');
//Depois criar um servidor utilizando o módulo http atribúido a uma variável.
const server = http.createServer((req,res)=>{
    //header são metadados que podem dar  a resposta para o servidor e mostrar qual o tipo de conteúdo que está sendo enviado .
    res.setHeader('content-type' , 'text/html');
    res.write('<h1> Resposta em HTML</h1>');
    res.write('<h1> Resposta em HTML2</h1>');
    res.write('<h1> Resposta em HTML3</h1>');
    res.write('<h1> Resposta em HTML4</h1>');
    res.end()
});

server.listen(3000,'localhost',()=>{
    console.log('servidor iniciado!');
});


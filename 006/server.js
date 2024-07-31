//Criando servidor com nodejs nativo.

//Primeiro precisamos importar o módulo http
const http = require('http');
//Depois criar um servidor utilizando o módulo http atribúido a uma variável.
const server = http.createServer((req,res)=>{
    //req = request  | res = response
    //Basicamente os parâmetros para verificar as requisições e enviar respostas a essas requisições.
    console.log('pedido aceito!');
    //res.write serve para enviar uma resposta escrita para a requisição.
    res.write('<h1> Pedido aceito!!!</h1>');
    //Aqui é o endpoint basicamente encerra a request após enviar o pedido.
    res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('servidor iniciado!');
});


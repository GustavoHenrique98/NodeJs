//Trabalhando com status code e redirecionamento com status code 301
const http = require('http');
const fs = require('fs');
const port = 3000;
const host = "localhost";

const server = http.createServer((req,res)=>{
    //Header
    res.setHeader('Content-type' , 'text/html');
    
    //rotas
    let html__page = "";
    switch(req.url){
        case '/':
            html__page = 'home.html';
            res.statusCode = 200;
        break;
        
        case '/home':
            res.setHeader('location', '/');
            res.statusCode = 301;
            res.end();
        break;
            
        case '/services':
            html__page = 'services.html';
            res.statusCode = 200;
        break;
        
        case '/about':   
            html__page = 'about.html';
            res.statusCode = 200;
        break;

        default:
            html__page = '404.html';
            res.statusCode = 404;
        break;
    }

    //Preparar a leitura da página
    fs.readFile(`./${html__page}`,(err,data)=>{
        if(err){
            res.write('ERRO! : ' + err.message);
            res.statusCode = 404;
            res.end();
        }
        res.write(data);
        res.statusCode = 200;
        res.end();

    });

})

server.listen(port,host,()=>{
    console.log(`Servidor rodando em http://${host}:${port}`);
})
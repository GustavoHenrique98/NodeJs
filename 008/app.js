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
        break;
        
        case '/services':
            html__page = 'services.html';
        break;
        
        case '/about':   
            html__page = 'about.html';
        break;

        default:
            html__page = '404.html';
        break;
    }

    //Preparar a leitura da página
    fs.readFile(`./${html__page}`,(err,data)=>{
        if(err){
            res.write('ERRO! : ' + err.message);
            res.end();
        }
        res.write(data);
        res.end();

    });

})

server.listen(port,host,()=>{
    console.log(`Servidor rodando em http://${host}:${port}`);
})
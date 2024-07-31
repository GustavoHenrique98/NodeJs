const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type', 'text/html');
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log('Erro ao ler dados');
            res.write('Erro!');
            res.end()
        }else{
            res.write(data);
            res.end();
        }
    });    
});

server.listen(3000,'localhost',()=>{
    console.log('Ta rodando!!!!')
})
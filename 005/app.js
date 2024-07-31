//Criar e remover arquivos de forma síncrona e assíncrona

// Síncrona. 
const fs = require('fs');
let log = "Mensagem de log\n";

// fs.writeFileSync('./logs.log' , log , {flag: 'a+'})
// console.log('escreveu de forma síncrona!');

//Assíncrona 
fs.writeFile('005/logs2.log',log,{flag: 'a+'},(err)=>{
    if(err){
        console.log(`ERRO! : ${err}`);
    }
})

//Removendo arquivos de maneira síncrona

fs.unlinkSync('005/logs.log')
fs.unlinkSync('005/logs2.log')


const fs = require('fs');

//Lendo arquivos de formas assíncrona
//Ler dados de forma assíncrona permite que a operação seja carregada 
//enquanto a informação e disponibilizada
//Abaixo estamos fazendo a leitura do arquivo 
//de forma assíncrona:
// fs.readFile('./dados.csv',(err,data)=>{
//     if(err){
//         console.log(`ERRO!:${err.message}`);
//     }else{
//         console.log(data.toString());
//     }
// })
//Como estamos executando de forma assíncrona 
//o console.log vai executar primeiro.
// console.log(`Primeira operação`);


//Agora vamos fazer a leitura dos dados de forma síncrona

let dados = '';
if(fs.existsSync('./dados.csv')){
    dados = fs.readFileSync('./dados.csv');
    console.log(dados.toString());
}else{
    console.log(`Diretório do arquivo não encontrado!`);
}

console.log('FIM!');

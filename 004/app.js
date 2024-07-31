const fs = require('fs');

//Criar pastas de maneira síncrona;
// fs.mkdirSync('logs');

// console.log('fim!');

//Criar pastas de maneira assíncrona
// fs.mkdir('004/logs',(err)=>{
//     if(err){
//         console.log('ERRO! : '+ err.message );
//     }
//     console.log('Pasta criada com sucesso!');
// })

// console.log('fim2');



//Removendo pastas de maneira síncrona
// if(fs.existsSync('004/logs2')){
//     fs.rmdirSync('004/logs2')
// }


// console.log('fim!');



//Removendo pastas de maneira assíncrona

fs.rmdir('004/logs',(err)=>{
    if(err){
        console.log(`ERRO! :${err.message} `);
    }
    console.log('Pasta removida com sucesso!')
})

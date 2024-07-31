
//Importando modulos do node;
//Exemplo com file System.
//const fs = require('fs');


//Recebendo a importação do arquivo modulesRequire.js
// //De apenas uma variavel ou array etc... (indiviudal)
// let nomes = require('./01-ModulosRequire');

// console.log(nomes[0])

//Importando vários arrays com modulo require e desestruturação de objetos.

let {nomes,frutos,soma} = require('./01-ModulosRequire');

// Acessando os valores

console.log(nomes[0]);
console.log(frutos[0]);

console.log(soma(1,2));
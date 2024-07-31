//Exportando variáveis individuais(no caso aqui é u array)

// let nomes = ['João','Carlos','Ana'];

// module.exports = nomes;




//Exportando várias variaveis, funções e etc...
let nomes = ['João','Carlos','Maria'];
let frutos = ['Maçã','Banana','Pêra'];
function soma(a,b){
    return a+b;
}
module.exports = {
    nomes,
    frutos,
    soma
}
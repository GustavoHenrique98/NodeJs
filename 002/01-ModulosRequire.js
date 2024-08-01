//Exportando variáveis individuais(no caso aqui é um array)

// let nomes = ['João','Carlos','Ana'];

// module.exports = nomes;




//Exportando várias variaveis,arrays, funções e etc...
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
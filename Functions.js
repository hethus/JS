const prompt = require("prompt-sync")();

// Functions:

// preferencial que crie ela usando um verbo + substantivo, igual: resetaCor


// let corSite = "vermelho";

// function criarNovo(cor, tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);

// criarNovo('verde', 'claro');

// console.log(corSite);

// ------------------------------------------------

// let idade = +prompt('idade sua: ');

// function idadePerdida(){
//     console.log(`a sua idade agora é: ${idade - 10}`);
// };

// if(idade <= 10){
//     console.log(`nada mudou...`);
// }else{
//     idadePerdida();
// };

// -----------------------------------------------------------------------------------



// TIPOS DE FUNÇÕES:

/*

1- Realiza uma tarefa e não devolve nada:

function idadePerdida(){
     console.log(`a sua idade agora é: 10`);
};

idadePerdida();


----------------------------------------------------


2- Realiza um calculo ou operação e retorna algo (ou seja, usa o return né):

function multiplicaPorDois(valor){
    return valor * 2; //                 o return diz onde a function irá acabar e quais valores ela terá que retornar onde ela foi chamada!
};

let numero = +prompt('numero para multiplicar: ');
let resultado = multiplicaPorDois(numero); // pega o numero do prompt e depois usa ele como valor na function e depois armazena o resultado

console.log(resultado); // apresenta o resultado :)

--- OU MESMO:

function multiplicaPorDois(valor, valor2){
    return valor * valor2; //                 o return diz onde a function irá acabar e quais valores ela terá que retornar onde ela foi chamada!
};

let numero = +prompt('numero para multiplicar: ');
let numero2 = +prompt('numero para multiplicar: ');
let resultado = multiplicaPorDois(numero, numero2); // pega os números do prompt e depois usa eles como valores na function e depois armazena o resultado

console.log(resultado); // apresenta o resultado :)

*/



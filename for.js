const prompt = require("prompt-sync")();

// -------- REVISÃO SOBRE FOR IN E FOR OF:

// ---- for in:

// const pessoa = {
//     nome: 'joe',
//     idade: 20
// };

// for (let i in pessoa){    
//     console.log(i);
//     if(pessoa[i] == 'joe'){
//         console.log(1);
//     };
// };

// NO CASO DE OBJETO {}, o for in só passa pelas chaves (key), o i não ira trazer a informação 20 ou 'joe', ele vai trazer nome e idade, ai para trabalhar com o valor, teríamos que puxar ele usando igual índice! ex: pessoa[1]

// ---

// const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// for(let i in letras){
//     console.log(i, letras[i])
// }

// NESSE CASO para percorrer o array ele sempre vai me trazer o ÍNDICE EM SEQUENCIA, do 0 ate o ultimo! da para trabalhar com a informação armazenada no índice usando tipo assim: letra[i]

// ---- for of:

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i of letras){
    console.log(i);
};

// NESSE CASO o for of percorre o array e a cada loop a variável i mudara de valor para um valor da array, até chegar no final!
// tomar cuidado nesse caso, pq o for of é mais utilizado se precisar somente mostrar os valores ou quando o índice pode ser desprezado!
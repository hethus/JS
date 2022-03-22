const prompt = require("prompt-sync")();


let resultado = 0;
let a = numeroMaior(999999, 1213);


function numeroMaior(a, b){
    return a > b ? a: b;
};

console.log()
console.log('o maior numero é ', a);
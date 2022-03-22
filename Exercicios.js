const prompt = require("prompt-sync")();

let a = 'vermelho';
let b = 'azul';
let c = a;

console.log(a, b);

a = b;
b = c;

console.log(a, b);


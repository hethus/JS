let valor1 = 10;
let valor2 = valor1 / 3;
let valor3 = valor2 * 3;
valor1 = valor1 % 2 + 5;
valor1 = valor1 / 2;

console.log(valor1, valor2, valor3)

if(valor1 != 2){
valor1 = 2;
valor2 = valor2 ** 2;
}else {
valor1 = valor1 - 1;
}

console.log("valor1: ", valor1, " valor2: ", valor2, " valor3: ", valor3);
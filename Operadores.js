const prompt = require("prompt-sync")();

// NOTA MUITO IMPORTANTE: usar algo igual i++ ou i-- no console.log, ira mostrar primeiro o numero sem fazer o incremento e só depois ele ira aumentar de valor!
// para contornar isso, é legal colocar o operador na frente: --i ou ++i


// (i += i) é igual a i = i + i
// (i -= i) é igual a i = i - i

// -------------------------------------------------------

// ---- operadores ternários:

// os operadores ternários é tipo um if else, primeiro ele verifica algo (ponto > 11) ai depois tem o operador condicional (?) e suas condições ('é top') ('n é top') sendo que as duas são separadas pelos dois pontos ( : )
// ou seja, ele verificar se a informação é verdadeira, se for, atribui o primeiro valor, se n for verdadeira, atribui o segundo valor!

// let ponto = 100;

// let tipo = ponto > 11 ? 'é top' : 'n é top';

// console.log(tipo);

// -------------------------------------------------------

// ---- operadores lógicos:

// && (e): duas informações precisam ser verdadeiras!

// || (ou): uma informação precisa ser verdadeira!

// ! (not): inverte a logica, ou seja, falso vira verdadeiro e verdadeiro vira falso. exemplo:

// console.log(true) // resultado = true

// console.log(!true) // resultado = false

// -------------------------------------------------------

// --------- OPERAÇÕES NÃO BOOLEANAS:

// ---- falsy:

/* são valores que irão retornar como false na logica booleana! exemplo:

undefined
null
0
false
''
NaN

// ---- truthy:

são valores que irão retornar como true na logica booleana! exemplo:

string
number
ou qualquer coisa que não esteja na categoria falsy! (IMPORTANTE!)

*/
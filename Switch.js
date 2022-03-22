const prompt = require("prompt-sync")();

// ---- A condicional switch case avalia uma expressão a partir das cases e se encontrar uma case correspondente a expressão ele executa as instruções da case em questão!
// lembra um pouco o if e as condições :)

let usua = '';

usua = prompt("quem você é? ")

switch(usua){
    case 'novo':
        console.log('usuario novo');
        break; // usar break para o switch n continuar em execução, IMPORTANTE!
    
    case 'premium':
        console.log('bem vindo, usuario vip!');
        break;

    case 'funcionario':
        console.log('bora trabalhar! :)');
        break;

    case 'diretoria':
        console.log('ligando servidores privados');
        break;

    case 'CEO':
        console.log('bem vindo chefe');
        break;

    default:            // --- CASO N ENCONTRE NENHUMA CASE PARA O VALOR EM QUESTÃO ELE EXECUTA ESSE COMANDO, É COMO SE FOSSE O ELSE!
        console.log('usuario não encontrado');
}
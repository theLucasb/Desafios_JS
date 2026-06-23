/*
DESAFIO 05 - CONTADOR INTELIGENTE

Crie uma função chamada contador() que receba:
- valor inicial
- valor final

A função deve exibir todos os números entre os valores informados.

Após concluir, crie uma segunda versão capaz de realizar
a contagem regressiva.
*/

function contador(inicial, final) {
    console.log("Contador Ascendente");
    for (let i = inicial; i <= final; i++) {
        console.log(i);
    }
}

function contadorRegressivo(inicial, final) {
    console.log("Contador Decrescente");
    for (let i = inicial; i >= final; i--) {
        console.log(i);
    }
}

contador(0, 10);
contadorRegressivo(10, 0);

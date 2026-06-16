// Desafio 02 - Média da turma

/* 
    Crie um array[] com 5 notas
    - Utilize um loop para:
        - Somar todas as notas
        - Calcular a média

    Mostrar no console/output o seguinte:
    Média da turma: 10.0
*/

//             0  1  2   3   4  = 5
const notas = [8, 7, 9, 10, 6]; 

let soma = 0;

for(let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

let media = soma / notas.length;

console.log("Média da turma: ", media);
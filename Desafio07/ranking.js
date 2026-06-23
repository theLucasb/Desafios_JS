/*
DESAFIO 07 - RANKING DE JOGADORES

Uma competição precisa exibir a classificação dos participantes.

Crie um array contendo o nome de 4 jogadores. ok

Utilize uma estrutura de repetição para mostrar:

1º Jogador: Luiz
2º Jogador
3º Jogador
4º Jogador

A posição deve ser gerada automaticamente pelo sistema.
*/

let jogadores = ["Luiz", "Gabriel", "Lucas", "Pâmela"];

for (let posicao = 0; posicao < jogadores.length; posicao++) {
    console.log(`${[posicao + 1]}º Jogador: ${jogadores[posicao]}`);
}
/*
DESAFIO 06 - FILME FAVORITO

Crie um objeto chamado filme contendo:
- titulo
- genero
- ano

Crie uma função responsável por receber esse objeto
e exibir todas as informações formatadas no console
utilizando template string.

O objetivo é praticar a manipulação de objetos
e passagem de parâmetros para funções.
*/

let filme = {
    titulo: "Shrek",
    genero: "Comédia",
    ano: 2005
}

function exibirFilme() {
    console.log(`
        O título do filme que irei assistir 
        no cinema nesse fim de semana é: ${filme.titulo}. 
        O gênero do filme é de: ${filme.genero}, 
        do ano de ${filme.ano}. `);
}

exibirFilme();
// Desafio 01 - Cadastro de Pessoa

/* 
    Crie um objeto chamado pessoa contendo:
    - nome
    - idade
    - cidade

    Após a criação:
    - Altere a idade
    - Adicione uma profissão
    - Remova a cidade

    No fim, exiba o objeto final.
*/

const pessoa = {
    nome: "Lucas",
    idade: 25,
    cidade: "Capanema"
};

pessoa.idade = 26;
pessoa.profissao = "Professor";

delete pessoa.cidade;

console.log(pessoa);
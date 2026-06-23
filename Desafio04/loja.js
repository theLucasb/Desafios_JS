/*
DESAFIO 04 - LOJA TECH

Uma loja de informática possui vários produtos cadastrados.

Crie um array de objetos contendo:
- nome
- preco

Utilize uma estrutura de repetição para mostrar apenas
os produtos que custam mais de R$ 100,00.

Exiba o nome dos produtos encontrados.
*/

let produtos = [
    {nome: "Teclado", preco: 159.90},
    {nome: "Mouse Gamer", preco: 249.90},
    {nome: "Fone de Ouvido", preco: 89.90}
];


for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].preco > 100){
        console.log(produtos[i].nome);
    }
}
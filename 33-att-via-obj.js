// atribuição via desestruturação
const pessoa = {
    nome: 'Reginaldo',
    sobrenome: 'Luiz',
    //idade: 24,
    endereco: {
        rua: 'Aparecida',
        //numero: 100
    }
};


const {nome, sobrenome, idade, endereco: {rua: r, numero = 00}} = pessoa; 
// let endereco virou let rua e let numero
// a chave rua mudou o valor par r
console.log(nome, sobrenome, idade, r, numero);

// ...resto
//console.log(resto);

// ...spread
// console.log(spread);
// TODOS ESSES TEM CONSTRUTORES:

// string literal: '', "", ``
// array literal: [];
// número literal: 12345;
// função literal: function() {};
// obj literal: nome = {};
// obj é formado por par, nome e valor

// -----EXEMPLO 1----- //
const pessoa = {
    nome: 'Reginaldo',
    sobrenome: 'Silva'
};

console.log(pessoa.nome); // notação de .
console.log(pessoa['nome']); // notação de []
console.log(pessoa.sobrenome);
console.log(pessoa['sobrenome']);

// -----EXEMPLO 2----- //
const chave = 'nome';
console.log(pessoa['nome']);
console.log(pessoa[chave]);

// -----EXEMPLO 3----- //
// Usando construtor
const pessoa1 = new Object();
pessoa1.nome = 'Regis';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 25;

// Usando literal
const pessoa2 = {
    nome: 'Regis',
    sobrenome: 'Silva',
    idade: 25
};

delete pessoa2.idade;
console.log(pessoa1, pessoa2);

// -----EXEMPLO 4----- //
// Usando método em obj
pessoa1.falarNome = function() {
    return (`${this.nome} está falando oi.`);
};

console.log(pessoa1.falarNome());


pessoa1.getDataNasc = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNasc());
console.log(' ');
for( let chave in pessoa1) {
    console.log(chave);
    console.log(pessoa1[chave]);
}
console.log('');

// -----EXEMPLO 5----- //
// molde que cria obj
// FACTORY FUNCTIONS //
function criaPessoa(nome, nomeMeio, sobrenome) {
    return {
        nome,
        nomeMeio,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.nomeMeio} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Reginaldo', 'Luiz',  'da Silva');
const p2 = criaPessoa('João', 'Carlos',  'Ribeiro');
const p3 = criaPessoa('Carlos', 'Alberto',  'de Nobrega');
console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);
console.log(p3.nomeCompleto);

// CONSTRUCT FUNCTIONS //
// {} <- this -> this
// return this: // {nome: 'Reginaldo', so...}
function Pessoa(nome, nomeMeio, sobrenome) {
    this.nome = nome;
    this.nomeMeio = nomeMeio;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Nenhum obj dessa function pode ser alterado
}

const p4 = new Pessoa('Reginaldo', 'Luiz',  'da Silva');
// Object.freeze(p4); travando o valor da const p4
// p4 = enderecoMemoria -> 'valor'
// p4.enderecoMemoria = {nome: 'Outro nome'}
// p4 = novoEnderecoMemoria
p4.nome = 'Outro nome';
const p5 = new Pessoa('João', 'Carlos',  'Ribeiro');
const p6 = new Pessoa('Carlos', 'Alberto',  'de Nobrega');
console.log(p4);
console.log(p5);
console.log(p6);




// CLASSES //
// class Pessoa {
//     constructor(nome, nomeMeio, sobrenome) {
//         this.nome = nome;
//         this.nomeMeio = nomeMeio;
//         this.sobrenome = sobrenome;
//     }
// }
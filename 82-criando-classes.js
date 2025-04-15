/***** Exemplo 1 *****/
// criando class construtora
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    falar() {
        console.log(`${this.nome} está falando`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Reginaldo', 'Luiz');
const p2 = new Pessoa('Luiz', 'Silva');
const p3 = new Pessoa('Silva', 'Silva');
console.log(p1);
console.log(p2);
console.log(p3);

/***** Exemplo 2 *****/
// criando função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está bebendo`);
}

const p4 = new Pessoa2('Regis', 'Silva');
console.log('');
console.log(p4);
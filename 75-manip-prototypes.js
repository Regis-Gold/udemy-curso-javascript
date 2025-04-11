// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
    //objA.__proto__ === Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: ObjB
    //objB.__proto__ === Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(' ');

// ***** EXEMPLO 1 ***** //
// Usando prototype
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const prod1 = new Produto('Camisa', 50);
prod1.desconto(50);
prod1.aumento(25);
console.log(prod1);

// ***** EXEMPLO 2 ***** //
// Reaproveitando funções do Produto.prototype no meu obj literal
const prod2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(prod2, Produto.prototype);

prod2.desconto(50);
prod2.aumento(25);
console.log(prod2);

// ***** EXEMPLO 3 ***** //
// Criar obj e já setar
const prod3 = Object.create(Produto.prototype);
prod3.nome = 'Caderno';
prod3.preco = 25;
prod3.aumento(10);
console.log(prod3);

// ***** EXEMPLO 4 ***** //
// Criar obj e já setar, e setar os atributos e chaves
const prod4 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Livro'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    },

});
    prod4.aumento(10);
    console.log(prod4);

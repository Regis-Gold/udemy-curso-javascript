// **** Usando defineProperty **** //
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave?
        value: estoque, // valor
        writable: true, // pode alterar?
        configurable: true // é configurável?
    });
    /*
    // só funciona com configurable true
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave?
        value: estoque, // valor
        writable: true, // pode alterar?
        configurable: true // é configurável?
    });
    */

// **** Usando defineProperties **** //
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // chave?
            value: nome, // valor
            writable: true, // pode alterar?
            configurable: true//configurável?
        },
        preco: {
            enumerable: true, // chave?
            value: preco, // valor
            writable: true, // pode alterar?
            configurable: true//configurável?
        },
    });
}

const prod1 = new Produto('Camisa', 20, 3);
prod1.estoque = 500;
// delete prod1.estoque;
console.log(prod1);
console.log(Object.keys(prod1));

for (let chave in prod1) {
    console.log(chave);
}



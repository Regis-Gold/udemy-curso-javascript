// **** defineProperty Getter e Setter**** //
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave?
        configurable: true, // é configurável?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Número não encontrado');
            }
            estoquePrivado = valor;
        }
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
}

const prod1 = new Produto('Camisa', 20, 30);
console.log(prod1);
prod1.estoque = 100;
console.log(prod1.estoque);
// console.log(Object.keys(prod1));

// **** Exemplo 2 **** //
function criaPessoa(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('Silva', ' ');
        }
    };
}

const pessoa1 = criaPessoa('Reginaldo');
pessoa1.nome = 'Luiz Silva'
console.log(pessoa1.nome);
// Abstração Produto > aumento, desconto
// Camiseta = Cor, Caneca = Material, Livro = Titulo, Caderno = Modelo

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

// ***** Func Camiseta ***** //
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Função muda aumento quantia -> percentual
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// ***** Func Caneca ***** //
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Generico', 50);
const camiseta =new Camiseta('Regata', 20, 'Preta');
const caneca =new Caneca('Caneca Roxa', 10, 'Plástico', 35);
console.log(produto);
camiseta.aumento(10);
caneca.aumento(10);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
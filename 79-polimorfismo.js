// Superclass
// Function da Conta Poupança
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }
  
  this.saldo -= valor;
  this.consultar();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.consultar();
};

Conta.prototype.consultar = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta = new Conta(11, 22, 100);
console.log(conta);
conta.depositar(50);
conta.sacar(20);
conta.sacar(130);
conta.sacar(10);
console.log('*****************************');

// Add Function da Conta Corrente
function ContaC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaC.prototype = Object.create(Conta.prototype);
ContaC.prototype.constructor = ContaC;

ContaC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }
  
  this.saldo -= valor;
  this.consultar();
};

const contCorrent = new ContaC(33, 44, 0, 100);
contCorrent.depositar(10);
contCorrent.sacar(110);
contCorrent.sacar(1);
console.log('*****************************');

// Ex de Function ContaCo usada na Poupaça
function ContaP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP;

const contPoup = new ContaP(33, 44, 0);
contPoup.depositar(10);
contPoup.sacar(10);
contPoup.sacar(1);
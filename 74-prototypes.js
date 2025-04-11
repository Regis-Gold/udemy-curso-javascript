/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

// Definição de protótipo //
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou de molde para as futuras produções.

Todods os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função contrutora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.

*/

// Função Construtora > molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `'Uns textos.' ${this.nome} ${this.sobrenome}`;
}
// Pessoa.prototype.estouAqui = 'Uma frase';
// Pessoa.protorype === pessoa1.__proto__;
// pessoa1 > Pessoa.prototype > Obj.prototype
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};


// Instância (crinado novos objetos)
const pessoa1 = new Pessoa('Reginaldo', 'Luiz'); // Pessoa func contrutora
const pessoa2 = new Pessoa('Luiz', 'Silva');
const data = new Date(); // Date func constr
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
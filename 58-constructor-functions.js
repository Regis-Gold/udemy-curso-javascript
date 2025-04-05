// Função contrutora -> obj
// Função fabrica -> obj
// Construtora -> sempre iniciar o nome com letra maiuscula ex: new Pessoa

function Pessoa(nome, sobrenome) {
    // Atributo ou métodos privadas
    // const Id = 123456;
    // const metodoInterno = e => {

    // };

    // Atributo ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log((`meu nome completo é: ${nome} ${sobrenome}.`));
    }
}

const p1 = new Pessoa('Regis', 'Luiz');
const p2 = new Pessoa('Luiz', 'Silva');
const p3 = new Pessoa('Silva', 'Silva');
console.log(p1.metodo());
console.log(p2.metodo());
console.log(p3.metodo());


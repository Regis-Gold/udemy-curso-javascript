// funções e métodos executam ações
// ex: criando informações para pessoa com várias const
const nome1 = 'Reginaldo';
const sobrenome1 = 'Luiz';
const idade1 = '24 anos';

const nome2 = 'Jose';
const sobrenome2 = 'Maria';
const idade2 = '47 anos';

// criando objeto literal para pessoa
const pessoa1 = {
    nome: 'Reginaldo',
    sobrenome: 'Luiz',
    idade: '25 anos'
};

console.log(pessoa1);

// função que cria objetos
// argumento é o valor passado para o parâmetro
// The name of this function below is factory
// pode retirar as informações com :
//       👇factory👇  parâmetro
function criarPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
} 

const pessoa2 = criarPessoa('Jose', 'Maria', 47) // argumento
const pessoa3 = criarPessoa('Emma', 'Tuner', 40)
const pessoa4 = criarPessoa('João', 'Silva', 27)
const pessoa5 = criarPessoa('Luiz', 'Costa', 22)

console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);
console.log("");

// adicionando dados da pessoa e uma frase
const pessoa6 = {
    nome: 'Anna', 
    sobrenome: 'Viana',
    idade: 25,
    
    // método "fala"
    fala() {
        console.log(`${this.nome} ${this.sobrenome} mandou uma mensagem...`)
    },
    incrementaIdade() {
        console.log(`Tenho ${this.idade++} anos, de sonho e de sangue e de América do Sul.`)
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
// pessoa6.incrementaIdade()
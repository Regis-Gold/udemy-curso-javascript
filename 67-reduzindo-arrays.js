// Filter: Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
// Map: Alterar valores do array, sempre mantendo o tamanho do array
// Reduce: É mais utilizada pra reduzir o array em um valor só

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro (Map)
const numeros = [5, 50, 100, 60, 8, 45, 10, 22, 14, 18];

const total = numeros.reduce(function (acumulador, valor) {
    // acumulador += valor;
    // if(valor % 2 === 0) acumulador.push(valor);
    acumulador.push(valor * 2);
    return acumulador;
}, []); // muda 0 por []
console.log(total);
console.log(' ');

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Reginaldo', idade: 25},
    {nome: 'Luiz', idade: 19},
    {nome: 'João', idade: 27},
    {nome: 'Maria', idade: 65},
    {nome: 'Eduardo', idade: 56},
    {nome: 'Monica', idade: 82},
    {nome: 'Leticia', idade: 61},
    {nome: 'Luana', idade: 33},
];

const pessoasMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoasMaisVelha);
console.log(' ');

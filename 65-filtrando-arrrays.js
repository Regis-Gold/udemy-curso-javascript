// Filter: Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
// Map: 
// Reduce: 

// Retorne os números maiores que 10
const numeros = [5, 50, 100, 60, 8, 45, 10, 22, 14, 18];

//const numFiltrados = numeros.filter(valor => valor > 10);
const numFiltrados = numeros.filter((valor, indice) => {
    console.log(indice, valor);
    return valor > 10;
});
console.log(numFiltrados);
console.log(' ');

// retorne as pessoa que tem o nome com 7 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
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

const pessoasNomes = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasIdades = pessoas.filter(obj => obj.idade > 50);
const pessoasComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasNomes);
console.log(' ');
console.log(pessoasIdades);
console.log(' ');
console.log(pessoasComA);


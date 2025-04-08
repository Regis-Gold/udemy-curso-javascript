// Filter: Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
// Map: Alterar valores do array, sempre mantendo o tamanho do array
// Reduce: 

// Dobre os números
const numeros = [5, 50, 100, 60, 8, 45, 10, 22, 14, 18];

const numDobrados = numeros.map(valor => valor * 2);
console.log(numDobrados);
console.log(' ');

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
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

const pessoasNomes = pessoas.map(obj => obj.nome);
const pessoasIdades = pessoas.map(obj => ({ idade: obj.idade}));
const pessoasComIds = pessoas.map(function (obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoasNomes);
console.log(' ');
console.log(pessoasIdades);
console.log(' ');
console.log(pessoasComIds);
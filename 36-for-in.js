//-----for in com arrays-----//
// vetor: array de uma dimensão
const frutas = ['Pera', 'Maçã', 'Laranja', 'Uva', 'Manga', 'Banana'];

// usando for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log();

//usando for in
// lê os indices ou chaves do obj
// o nome da let pode ser qualquer um
for (let i in frutas) {
    console.log(frutas[i]);
}
console.log();

//-----for in com objects-----//
const pessoa = {
    nome: 'Reginaldo',
    sobrenome: 'Luiz',
    idade: 24
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}
console.log();




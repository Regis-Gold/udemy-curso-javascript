// For classico - geralmente usado com iteraveis que tem indices (array ou string)
// For in- retorna indice ou chave (string, array ou objects)
// For of- retorna o valor em si (iteraveis, string ou arrays)
// 


//-----For para arrays-----//

const nomes = ['Reginaldo', 'Luiz', 'Silva'];

// for classico para arrays
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log();

// for in para arrays
for (let i in nomes) {
    console.log(nomes[i]);
}
console.log();

// for of para arrays
for (let valor of nomes) {
    console.log(valor);
}
console.log();

// forEach para arrays
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});
console.log();

//-----For para objects-----//
const pessoa = {
    nome: 'Reginaldo',
    sobrenome: 'Luiz',
    idade: 24
};

// for in para objects
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

/*
// for of para objects não é iteravel
for (let key of pessoa) {
    console.log(key, pessoa[key]);
}
*/
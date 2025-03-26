
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('');

/*
// estrutura de repetição
// i = index

1 variavel de controle com valor inicial
2 criar condição
3 incrementar ou decrementar variavel de controle
*/

for (let i = 0; i <= 10; i++) {
    console.log(`Linha ${i}`);
}
console.log("");

// pulando for de 10 em 10
// começar com valor negativo
for (let i = 60; i >= -50; i -= 10) {
    console.log(`Linha ${i}`);
}
console.log("");


// decrementar valor do for
// verificar se o valor é par
for (let i = 50; i >= 40; i-= 1) {
    const par = i % 2 === 0; // % divisivel
    console.log(i, par);
}
console.log("");

// estrutura ternária nomeando par ou impar
for (let i = 50; i >= 40; i-= 1) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}
console.log('');

// usando for para percorrer array
// .length para ver tamanho do array
const frutas = ['maça', 'pera', 'uva', 'laranja', 'melancia'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
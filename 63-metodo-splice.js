// -5,  -4,  -3,  -2,  -1
//  0,   1,   2,   3,   4
const nomes = ['Reginaldo', 'Luiz', 'Silva', 'João', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(3, 2);
console.log(nomes);
console.log(removidos);
console.log(Number.MAX_VALUE);
console.log('');

console.log(nomes.splice(-1, 1)); // pop
console.log(nomes.splice(0, 1)); // shift
console.log(nomes.splice(nomes.length, 0, 'Antonio')); //push
console.log(nomes.splice(0, 0, 'Carlos', 'Roberto')); //unshift
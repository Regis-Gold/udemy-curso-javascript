/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

// ...rest (resto), 
// ...spread (distribuir)
// atribuição via desestruturação
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroN, segundoN, terceiroN, ...resto] = numeros;
console.log(primeiroN, segundoN, terceiroN);
console.log(resto); // resto do array

const [um, , tres, , cinco, sete] = numeros; // pular valores (vazios)
console.log(um, tres, cinco, sete);

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][2]);

const [lista1, lista2, lista3] = numeros2;
console.log(lista2[1]);
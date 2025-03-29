// While e Do While
// Não sabemos quantas repetições que o laço tem até que ele termine
// while checa a condição e depois executa o código
// do while chega o código e depois executa a condição

const nome = 'Reginaldo';

// interação do laço com number
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log('##### spacing #####');

// interação do laço com string 
let indice = 0;
while (indice < nome.length) {
    console.log(nome[indice]);
    indice++;
}
console.log('##### spacing #####');

// função que gera um numero aleatório entre 0 e n com while
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('##### spacing #####');

// do while
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10)
// return
// Retorna um valor
// Termina a função

// ***** Exemplo 1 ***** //
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 10));

// ***** Exemplo 2 ***** //
function soma2(a, b) {
    console.log(a + b);
}
soma2(5, 2);

// ***** Exemplo 3 ***** //
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'slateblue';
});

// ***** Exemplo 4 ***** //
function criaPessoa(nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
}

const p1 = criaPessoa('Reginaldo', 'Luiz');
const p2 = criaPessoa('Luiz', 'Silva');
console.log(p1, p2);

// ***** Exemplo 5 ***** //
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Pessoa');
console.log(resto);

// ***** Exemplo 6 ***** //
// function duplica(n){
//     return n * 2;
// }

// function triplica(n){
//     return n * 3;
// }

// function quadriplica(n){
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

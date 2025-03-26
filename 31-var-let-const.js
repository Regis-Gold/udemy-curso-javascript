// let tem escopo de bloco {... bloco}- cria
// var so tem escopo de função - redeclara
// pode usar a função antes de criar e pode criar e usar a função depois

const verdadeira = true;

let nome = 'Reginaldo'; // let no bloco
var nome2 = 'Reginaldo';

if (verdadeira) {
    let nome = 'Luiz'; // outro bloco
    var nome2 = 'Silva'; // redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'José'; // outro bloco
        var nome2 = 'Maria'; // redeclarando
        console.log(nome, nome2);
    }
}

function falaOi () {
    if (verdadeira) {
        let nome = 'Luiz'; // outro bloco
        var sobrenome = 'Silva';// redeclara
        console.log(nome, sobrenome);
    }
}

// dessa maneira ocorre o roisting, eleva a declaração de variável
// function func () {

// };

// dessa forma não ocorre o roisting
// const func = function () {

// };
// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


// Função dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();
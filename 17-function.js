// function recebe valor, executam ações, podem ou não retornar valor

// saudação com function
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
// salvando o valor com const
const variavel = saudacao('Reginaldo');
console.log(variavel);

// soma entre dois valores
// tudo que está abaixo de return não é executado

// tudo que está dentro da função está protegido pelo escopo da função
function soma(x = 5, y = 10) {
    const resultado = x + y
    return resultado;
}

console.log(soma(160));

// Parece que a constante está sendo redeclarada, mas como ela está fora do escopo da function soma, as constantes são diferentes
const resultado = soma(10, 20);
console.log(resultado);

// criando function anonima
// Sempre que usar o sinal de atribuição = preciso terminar a função com ;
const raiz = function(n) {
    return n ** 0.5;
};

console.log('----------------------------');
console.log(raiz(9));
console.log(raiz(16));
console.log('----------------------------');

// arrow function
const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz2(30).toFixed(2));
console.log(raiz2(50).toFixed(2));
console.log('----------------------------');

// arrow function simple
const raiz3 = n => n ** 0.5; 

console.log(raiz3(20).toFixed(2));
console.log(raiz3(10).toFixed(2));
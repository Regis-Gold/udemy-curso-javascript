// arguments sustenta todos os argumentos enviados em uma função(somente usando a palavra function)
// Pode ou não enviar argumentos para a função
// Caso queira pode ou não criar os parametros da função(somente function)
function funcao() {
    console.log('Olá');
    console.log(arguments);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7);


function segundaFuncao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
segundaFuncao(5, 10, 15, 20, 25, 30, 35)


// Parametro fica no inicio da função e argumento fica onde chamamos a função
function terceiraFuncao(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
terceiraFuncao(2, 4, 6, 8);


// somando valores
// caso todos os valores não sejam inseridos no argumentos, devem estar referenciado no parametro
// usar undefined no argumento para pular o valor
function quartaFunc(a, b = 5, c = 20) {
    console.log(a + b + c);
}
quartaFunc(3, undefined, 35);


// desestruturação de atribuição
function quintaFunc({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
quintaFunc({nome: 'Reginaldo', sobrenome: 'Luiz', idade: 24});


// function que faz conta
// com e sem array usando rest operator (tem que ser o ultimo parametro da função)
// que precisamos enviar parametros indeterminados para uma função usar o rest operator (...parametro)
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

    }
    console.log(acumulador);
}
conta('+', 1, 10, 20, 30, 40, 50);
conta('-', 1, 10, 20, 30, 40, 50);
conta('/', 1, 10, 20, 30, 40, 50);
conta('*', 1, 10, 20, 30, 40, 50);
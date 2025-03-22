/*
    Primitivos(imutáveis): string, number, boolean, undefined, null (bigint, symbol) são valores copiados
*/
// strings são indexadas e imutáveis
let nome = 'Reginaldo';
nome = 'Luiz';
console.log(nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);

/*
    Referência(mutáveis): array, object, function
    valores passados por referência
    let d = [...c] spread do array c
*/

let c = [1,2,3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// ex de object
const e = {
    nome: 'Reginaldo',
    sobrenome: 'Luiz'
};
const f = {...e};
e.nome = 'Lucio';
console.log(f);
console.log(e);

console.log('Byte nulo:\0');
console.log('Backspace:\b');
console.log('Alimentador de formulário:\f');
console.log('Nova linha:\n');
console.log('Retorno do carro:\r');
console.log('Tabulação:\t');
console.log('Tabulação Vertical:\v');
console.log('Apóstrofo ou aspas simples:\'');
console.log('Aspas Dupla:\"');
console.log('Caractere de barra invertida:\\');
console.log('Caractere com a codificação Latin-1 especificada por três dígitos octal XXX entre 0 e 377:\251');
console.log('Caractere com a codificação Latin-1 especificada por dois dígitos hexadecimal XX entre 00 e FF:\xA9');
console.log('Caractere Unicode especificado por quatro dígitos hexadecimal XXXX:\u00A9');


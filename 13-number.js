// as contas seguem o padrão IEEE 754-2008
let num1 = 100.1213;
let num2 = 25;
let num3 = 50;

console.log(num1.toString() + num2 + num3); // convertendo number para string
num3 = num3.toString(); // alterando o valor da váriavel num3 para string
console.log(num2.toString(2)); //representação binária do número
console.log(num1.toFixed(2)); // arredondar valor (ex: centavos)
console.log(Number.isInteger(num1)); 
console.log(Number.isInteger(num2)); // verificar se o número é um Inteiro (true or false)
let temp = num1 * 'Opa';
console.log(Number.isNaN(temp)); // vai retornar verdadeiro se a conta for inválida (NaN) e false se a conta for válida

let num4 = 0.7;
let num5 = 0.1;

console.log('Imprecisão:', num4 + num5); // a soma gera uma certa imprecisão
num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5;


num4 = Number(num4.toFixed(2)); // resolve a imprescisão da soma anterior
console.log('Precisão:', num4);
console.log(Number.isInteger(num4)); // verifica se o número é Inteiro
num4 = ((num4 * 100) + (num5 * 100)) / 100; // solução usando calculo (obs: aparece 0.9 porque eu não tirei o calculo da linha 19)
console.log(num4);
console.log(Number.isInteger(num4));

console.log(' ')
console.log('*************************');
console.log('********************');
console.log('***************');
console.log('**********');
console.log('*****');
console.log(' ')


const a = 20;
const b = 10;
console.log('1-', a + b); // adição
console.log('2-',a - b); // subtração
console.log('3-',a * b); // multiplicação
console.log('4-', a / b); // divisão
console.log('5-', a ** b); // elevado
console.log('6-', a % b); // módulo
console.log('7-', a < b); // maior que
console.log('8-', a > b); // menor que
console.log('9-', a === b); // igual (equivalência)
console.log('10-', a <= b); // menor ou igual
console.log('11-', a >= b); // maior ou igual
console.log('12-', a != b); // diferente de
console.log('13-', a && b); // operador lógico AND
console.log('14-', a || b); // operador lógico OR
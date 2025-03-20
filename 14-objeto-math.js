let num1 = 10.70;
let num2 = Math.floor(num1);
console.log(num2); // arredonda o número para baixo

let num3 = 11.50;
let num4 = Math.ceil(num3);
console.log(num4); // arredonda o número para cima

let num5 = 13.51;
let num6 = Math.round(num5);
console.log(num6); // arredonda o número para o mais próximo

console.log(Math.max(1,3,9,-100,-150,300,400));// ver qual o maior número da sequência de números
console.log(Math.min(1,3,9,-100,-150,300,400));// ver qual o menor número da sequência de números
console.log(Math.random()); // gera um número aleatório

const aleatorio = Math.random() * (100 - 50) + 50;
console.log(aleatorio); // gerar número aleatório com casas decimais entre 50 - 100

const aleatorio2 = Math.round(Math.random() * (100 - 50) + 50);
console.log(aleatorio2); // gerar número aleatório Inteiro entre 50 - 100

console.log(Math.PI); // PI
console.log(Math.pow(2,10)); // dois elevado a 10
console.log(2 ** 10); // dois elevado a 10 (FORMA RECOMENDADA)

let num7 = 16;
console.log(num7 ** (1/2)); // raiz quadrada
console.log(num7 ** 0.5); // raiz quadrada
console.log(100 / 0); // TOMAR CUIDADO pois é um tipo de divisão que retorna o valor (Infinity) é checado como true

console.log((25 + 28 + 1 + 25 + 20 + 19 + 36) / 60);


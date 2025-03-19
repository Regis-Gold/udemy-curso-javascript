// todas as opções aparecerão somente no navegador
window.alert('Mensagem de alerta');
window.confirm('Confirme');
window.prompt('Escreva seu nome');

let confirma = confirm('Sua idade');
console.log(confirma); // valor

let num1 = prompt('Digitar um número');
console.log(num1); // valor

let num2 = prompt('Digitar outro número');
console.log(num2); // valor

num1 = Number(num1);
num2 = Number(num2);
const result = num1 + num2;
console.log(num1 + num2);
alert(`O resultado foi: ${result}`)
const nome = 'Reginaldo';
const sobrenome = 'Luiz da Silva';
let idade = 24;
let anoNascimento = (2022 - idade);
let peso = 63;
let altura = 1.74;
let IndiceMassaCorporal = peso / (altura * altura);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);
console.log('tem' + ' ' + idade + ' ' + 'anos, pesa'+ ' ' + peso + ' ' + 'kg');
console.log(`tem ${altura} de altura, e seu IMC é de ${IndiceMassaCorporal}`); // a maneira atualizada de utilizar

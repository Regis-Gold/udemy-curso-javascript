// Strings, Objetos, Funções, Números
// Valor por referência(apontam para o mesmo valor na memória)
// pop remove do final
// shift remove no começo
// push adiciona no final do array
// unshift adiciona no inicio do array
//const nomes = ['Reginaldo', 'Luiz', 'Silva'];
const nomes = new Array('Reginaldo', 'Luiz', 'Silva', 'João', 'Júlia');
const novo = [...nomes]; // spread
const novo2 = nomes.slice(1, 3);
nomes[2] = 'João';
nomes.push('Clara');
nomes.push('Bianca');
nomes.unshift('José');
delete nomes[2];

const removido = novo.pop();
console.log(nomes);
console.log(nomes.length);
console.log(novo);
console.log(`nomes removidos: ${removido}`);
console.log(novo2);

// TRANSFORMANDO STRING PARA ARRRAY
const nome2 = 'Reginaldo Luiz Silva';
const nomes2 = nome2.split(' ');
console.log(nomes2);
console.log('');

// TRANSFORMANDO ARRAY EM STRING
const nome3 = ['Reginaldo', 'Luiz', 'Silva'];
const nomes3 = nome3.join(' ');
console.log(nomes3);

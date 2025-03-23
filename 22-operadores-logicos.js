// Operadores Lógicos

// dois es comercial &&
console.log(true && true); // && -> AND -> E
console.log(true && false);
console.log(false && false);
console.log("");

// dois pipes ||
console.log(true || true); // || -> OR -> OU
console.log(true || false);
console.log(false || false);
console.log("");

// Exemplo prático
const usuario = 'Reginaldo'; // dados form
const senha = '11223344'; // dados form

const vaiLogar = usuario === 'Reginaldo' && senha === '11223344';
console.log(vaiLogar); // login correto

const vaiLogar2 = usuario === 'Reginaldo' && senha === '000000000';
console.log(vaiLogar2); // login incorreto

console.log(!true); /* ! -> NOT -> NÃO */
console.log(!false);


// FALSY VALUE
/*
false (valor falso literal)
zero (0)
string vazia (''), (""), (``)
nulo (null)
indefinido (undefined)
Not a Number (NaN)
*/

// Short-Circuit con &&
console.log('Reginaldo Luiz' && 'Maria');
console.log('Reginaldo Luiz' && NaN && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());

// Short-Circuit com ||
console.log(0 || false || null || 'Reginaldo Luiz' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'white';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);
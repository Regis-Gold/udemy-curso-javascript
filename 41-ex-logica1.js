// Escreva uma função que recebe 2 números e retorne o maior deles
// exemplo 1
function maiorNumero(x, y) {
    if (x > y) {
        return x;
    } else { // pode retirar o else
        return y;
    }
}

console.log(maiorNumero(100,140));

// exemplo 2 bloco com uma linha apenas pode eliminar as chaves e fazer tudo em uma linha
function maiorNumero(x, y) {
    if (x > y) return x;
    return y;
}

console.log(maiorNumero(100,1240));

// exemplo 3 condição ternária
function maiorNumero(x, y) {
    return x > y ? x : y;
}

console.log(maiorNumero(2343,1240));

// exemplo 4 arrowFunction
const maiorNum = (x, y) => {
    return x > y ? x : y;
};

console.log(maiorNum(2343,3626));

// exemplo 4 arrowFunction 1 linha
const maiorNum2 = (x, y) => x > y ? x : y;
console.log(maiorNum2(4224,3626));
// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)

/*
    const numeros = [5, 50, 100, 60, 8, 45, 10, 22, 14, 18];
    const numerosPares = numeros.filter(function(valor) {
        return valor % 2 === 0;
    }).map(function(valor) {
        return valor * 2;
    }).reduce(function(ac, valor) {
        return ac + valor;
    });
*/

const numeros = [5, 50, 100, 60, 8, 45, 10, 22, 14, 18];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

// [50, 100, 60,  8, 10,  22, 14, 18]
// [100, 200, 120, 16, 20,  44,  28, 36]
// 564
console.log(numerosPares);
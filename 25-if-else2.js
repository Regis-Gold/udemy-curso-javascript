// if pode ser usado sozinho
// sempre que utilizo a palavra else preciso de um if antes
// posso ter vários else if na checagem
// so posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

console.log('<<< Código ANTERIOR');


const numero1 = 20;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {código}
// O bloco de chave de if, function, for, eles não tem ; na estrutura dele

if (numero1 >= 0 && numero1 <= 20) {
    console.log('O número está entre 0 e 20.');
} else {
    console.log('O número NÃO está entre 0 e 20.');
}

const numero2 = 10;

if (numero2 >= 0 && numero2 <= 5) {
    console.log('O número está entre 0 e 5.'); 
} else if (numero2 >= 6 && numero2 <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero2 >= 9 && numero2 <= 11) {
    console.log('O número está entre 9 e 11.');
} else{
    console.log('O número NÃO está entre 0 e 11.');
}

console.log('Código SEGUINTE >>>');
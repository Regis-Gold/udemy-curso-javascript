// ********** EXEMPLO 1 **********
function* geradora1() {
    // ...Código...
    yield 'Valor 1';
    // ...Código...
    yield 'Valor 2';
    // ...Código...
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}
console.log('');

// ********** EXEMPLO 2 **********
function* geradora2() {
    // ...Código...
    yield 'Valor 1';
    // ...Código...
    yield 'Valor 2';
    // ...Código...
    yield 'Valor 3';
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next());
console.log(g2.next());
console.log('');

// ********* EXEMPLO 3 **********
function* geradora3() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log('');

// ********* EXEMPLO 4 **********
function* geradora4() {
    yield 'Valor 1';
    yield 'Valor 2';
}

function* geradora5() {
    yield* geradora4();
    yield 'Valor 3';
    yield 'Valor 4';
}

const g5 = geradora5();
for(let valor of g5) {
    console.log(valor);
}
console.log('');

// ********* EXEMPLO 5 **********
function* geradora6() {
    yield function() {
        console.log('Vim do y1');
    };
    
    return function() {
        console.log('Vim do return');
    } // retorna o valor e a função termina
    
    yield function() {
        console.log('Vim do y2');
    }; // 
}

const g6 = geradora6();
const func1 = g6.next().value;
const func2 = g6.next().value;
func1();
func2();
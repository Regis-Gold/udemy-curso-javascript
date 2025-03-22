// arrays são informações adicionadas dentro dos colchetes [].
// arrays são indexados pelos seus elementos 0,1,2,3...
const alunos = ['Luiz', 'Maria', 'João']

// vendo indice do array
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

// adicionando mais elementos ao array
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

// tamanho do array
console.log(alunos.length); 

// adiciona elementos no final do array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';
console.log(alunos);

// adicionar elemento no final do array
alunos.push('Reginaldo');
alunos.push('Lucia');
console.log(alunos);

// adicionar elementos no inicio do array

alunos.unshift('Manoel'); // indice um
alunos.unshift('Pamela'); // indice zero
console.log(alunos);

// remover elementos no final do array
alunos.pop();
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// remove elementos no inicio do arrray
const removido2 = alunos.shift();
console.log(removido2);
console.log(alunos);

// apagar um elemento indice do array alunos mas o indice não é apagado (empty item)
delete alunos[1];
console.log(alunos);

// acessar indice que não existe (undefined)
console.log(alunos[50]);

// fatiar elemento do array
console.log(alunos.slice(0,3));
console.log(alunos.slice(0,-1));

// verifica se é ou não um array
console.log(typeof alunos);
console.log(alunos instanceof Array);

// forma correta de usar array
const array = [1,2,3];
array.push(4);
array[0] = 'Regis';

/*
// forma incorreta
array = 'outra';
console.log(array);
*/
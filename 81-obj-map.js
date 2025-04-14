const pessoas = [
  {id: 3, nome: 'Reginaldo'},
  {id: 2, nome: 'Luiz'},
  {id: 1, nome: 'Silva'},
];

// ***** EXEMPLO 1 ***** //
const novasPessoas = {};
for (const pessoa of pessoas) {
  const{id} = pessoa;
  novasPessoas[id] = {...pessoa};
}

// ***** EXEMPLO 2 ***** //
const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
  const{id} = pessoa;
  novasPessoas2.set(id, {...pessoa});
}

// ***** EXEMPLO 3 ***** //
// for (const pessoas of novasPessoas.values()) {
//   console.log(pessoas);
// }
// novasPessoas.delete(2);

console.log(novasPessoas);
console.log('*****************************');
console.log(novasPessoas2);
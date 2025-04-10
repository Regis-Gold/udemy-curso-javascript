/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Já vimos
Object.keys(retorna as chaves)
Object.freeze(congela os objetos)
Object.defineProperties(define várias prop)
Object.defineProperty(define uma propriedade)
*/

// ***** EXEMPLOS ***** //
// Copiando propriedades de um obj
const produto = {nome: 'Prod', preco: 5.00, peso: '100g'};
// Object.freeze(produto); // Congela
// const caneca = {
//     ...produto,
//     material: 'Porcelana'
// }; // Ex 1

// const caneca = {nome: produto.nome, preco: produto.preco}; // Ex 2

const caneca = Object.assign({}, {material: 'Porcelana'}); // Ex 3


caneca.nome = 'Caneca Roxa';
caneca.preco = 7.00;
console.log(produto);
console.log('*****************************');
console.log(caneca);
console.log('*****************************');
console.log(Object.keys(produto)); // keys
console.log('*****************************');
console.log(Object.values(produto)); // value
console.log('*****************************');
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // imprime os valores de Object.defineProperty e defineProperties
console.log('*****************************');
console.log(Object.entries(produto));

// ITERANDO SOBRE OS VALORES
console.log('*****************************');
for (let entry of Object.entries(produto)) {
    console.log(entry);
}

// ITERANDO SOBRE OS VALORES COM DESTRUCT   
console.log('*****************************');
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

// ITERANDO SOBRE OS VALORES COM DESTRUCT2   
console.log('*****************************');
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
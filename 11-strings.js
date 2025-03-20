// String é indexada (01234567...)
let umaString = "\\Um Texto completo."; // barra de escape e invertida no texto
console.log(umaString[4]); // mostrará somente o conteúdo 4 indexado
console.log(umaString.charAt(6)); // mostrará o conteúdo 6 indexado

console.log(umaString.concat(' Sobre', ' JavaScript'));
console.log(umaString + ' Sobre JavaScript');
console.log(`${umaString} Sobre JavaScript`); // MELHOR FORMA DE USAR

console.log(umaString.indexOf('Um')); // qual indice se encontra uma palavra especifica
console.log(umaString.lastIndexOf('o')); // semelhante a indexOf mas começa a busca ao contrário
console.log(umaString.match(/[a-z]/g)); // expressão regular para encontrar todas as letras minusculas
console.log(umaString.search(/x/)); // sempre vai retornar o indice do que foi pedido e aceita expressões regulares
console.log(umaString.replace('Um', 'Outro')); // pode substituir uma palavra
console.log(umaString.replace(/o/g, '#')); // altera todas as letras 'o' do texto
console.log(umaString.length); // tamanho da string
console.log(umaString.slice(4, 9)); // pegar pedaço do texto com .slice(inicio, fim)
console.log(umaString.slice(-9, -1));
console.log(umaString.substring(umaString.length - 9)); // mesma coisa do .slice
console.log(umaString.split('o')); // dividir string mas os valores dentro dos parenteses não serão exibidos
console.log(umaString.toUpperCase()); // string toda MAIÚSCULA
console.log(umaString.toLocaleLowerCase()); // string toda minúscula 




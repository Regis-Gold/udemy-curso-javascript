// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    return largura > altura ? true : false; // podemos retirar true e false pois os valores já serão retornaods
}

console.log(ePaisagem(1920, 1080));

// exemplo 2 arrowFunction
const Paisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920));
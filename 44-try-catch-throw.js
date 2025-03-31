// qualquer código que possa gerar um erro pode ir para o bloco try e verificar no bloco catch
// bloco try - siginifica tentar, tente executrar, caso ocorra qualquer erro ele deve cair no bloco catch - que recebe o erro para ser executado
// não exibir erro para o usuário final

/*
try {
    console.log(naoExisto);
} catch(err) {
    console.log('Esse elemento não existe');
    console.log(err);
}
*/

// throw lançar e capiturando o erro de uma possível função...
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(10, 20));
    console.log(soma('10', 20));
} catch(error) {
    console.log(error);
}

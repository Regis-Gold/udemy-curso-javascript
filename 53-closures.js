function retornaFuncao() {
    const nome = 'Regis';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);
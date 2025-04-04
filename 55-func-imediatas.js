// IIFE - Immediately Incoked Function Expression
(function(idade, peso, altura) {
    const sobrenome = 'Luiz';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Reginaldo'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(25, 64, 1.74);
// A função conhece tudo que foi declarado dentro e fora do escopo

const nome = 'Regis';

function falaNome() {
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    const nome = 'Luiz';
    console.log(nome);

    falaNome();
}
usaFalaNome();
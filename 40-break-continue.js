// break e continue funcionam com todos os laços
// continue pula para a proxima iteração do laço
// break para o laço da iteração
// atualizar a variavel de controle antes de fechar o laço i++ antes de continue e antes de break

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log('Pulei o número');
        continue;
    }
    
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, parando o laço...');
        break
    }
}
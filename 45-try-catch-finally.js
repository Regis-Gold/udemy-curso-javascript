try {
    // executada quando não há erros
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    // executada quando há erros
    console.log('Tratando o erro');
} finally {
    // executado sempre
    console.log('finally sempre é executado');
}

console.log('');

// função de hora
function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw TypeError('Esperando instância de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('11-02-1986 20:15:26')
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
} finally {
    console.log('Tenha um bom dia');
}
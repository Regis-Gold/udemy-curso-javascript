/*
// capturando tag h1 e alterando o texto para data
const h1 = document.querySelector('.container h1');
const data = new Date();


// função para os sete dias da semana
function diasDaSemana(diaSemana) {
    let seteDias;

    switch (diaSemana) {
        case 0:
            seteDias = 'Domingo';
            return seteDias;
        case 1:
            seteDias = 'Segunda-feira';
            return seteDias;
        case 2:
            seteDias = 'Terça-feira';
            return seteDias;
        case 3:
            seteDias = 'Quarta-feira';
            return seteDias;
        case 4:
            seteDias = 'Quinta-feira';
            return seteDias;
        case 5:
            seteDias = 'Sexta-feira';
            return seteDias;
        case 6:
            seteDias = 'Sábado';
            return seteDias;
        default:
            seteDias = '';
            return seteDias;
    }
}

// função para os meses do ano
function mesesDoAno(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
}

// função para números com uma casa décimal
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

// função que forma a data
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const seteDias = diasDaSemana(diaSemana);
    const nomeMes = mesesDoAno(numeroMes);

    return (
       `${seteDias}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}`
    );
}
h1.innerHTML = criaData(data);
*/


// capturando tag h1 e alterando o texto para data
const h1 = document.querySelector('.container h1');
const data = new Date();


// função para os sete dias da semana
function diasDaSemana(diaSemana) {
    const osDiasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return osDiasSemana[diaSemana];
    }

// função para os meses do ano
function mesesDoAno(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

// função para números com uma casa décimal
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

// função que forma a data
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const seteDias = diasDaSemana(diaSemana);
    const nomeMes = mesesDoAno(numeroMes);

    return (
        `${seteDias}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}`
    );
}
h1.innerHTML = criaData(data);




/*
// fazendo do jeito simples
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/
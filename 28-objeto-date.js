// new é uma função construtora
// a primeira letra é sempre maiuscula
// const trssHoras = 60 * 60 * 3 * 1000;
// const um dia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); Date(0) = 01/01/1970 Timestamp unix
//const data = new Date(2022, 8, 14); // a, M, d, h, m, s, ms


const data = new Date(Date.now());
console.log('Dia', data.getDate());
console.log('Dia sm', data.getDay()); //0 D
console.log('Mês', data.getMonth() + 1);//M 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log(data.toString());
console.log(Date.now()); // ms hora atual

// criando apresentação de data

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora =zeroEsquerda( data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);
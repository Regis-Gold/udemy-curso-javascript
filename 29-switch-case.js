// estrutura condicional switch case

function funcDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date('1998-01-22 02:10:00');
const diaSemana = data.getDay();
const diaSemanaTexto = funcDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);



/*
// dias da semana utilizando switch case
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
}
*/

/*
// dias da semana utilizando if else
if(diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = ''
}
*/

//console.log(diaSemana, diaSemanaTexto);
/* 
Entre 0 - 11 hrs - Bom Dia
Entre 12 - 17 hrs - Boa Tarde
Entre 18 - 23 hrs - Boa Noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else preciso de um if antes
// posso ter vários else if na checagem
// so posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

// exemplo 1 utilizando if e else
const tenhoGrana = true
//const tenhoGrana = false;
;

if (tenhoGrana) {
    console.log('Vou sair de casa hoje');
} else {
    console.log('Não vou sair de casa');
}

// exemplo 2 utilizando if, else if e else
const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá');
}


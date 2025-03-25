// operador ternário = ? :
// (condição) ? 'value true' : 'value false'



// usando a operação ternária
const pontuacaoUsuario = 1111;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// usando if e else
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/

// encurtando código de outra aula
const corUsuario = null; // fallback
const corPadrao = corUsuario || 'Preta'; 
console.log(nivelUsuario, corPadrao);




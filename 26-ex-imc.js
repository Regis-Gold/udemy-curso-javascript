/* Capturar evento de submit do formulário */
/* 
    Função anônima function () 
    selecionar form (querySelector)
    add evento no form (addEventListener)
    capturar o evento de submit (preventDefault)
    selecionar peso e altura
    cons para validar Number(nome.value)
    return peso inválido
    return altura inválida
    const para calcular o imc
*/

const form = document.querySelector('#form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const pesoPessoa = event.target.querySelector('#peso');
    const alturaPessoa = form.querySelector('#altura');

    const peso = Number(pesoPessoa.value);
    const altura = Number(alturaPessoa.value);

    if (!peso) {
        setResult('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResult(msg, true);
});

/* 
depois de calcular o imc essa função ira definir o texto referente a cada valor 
quando o valor do if for pequeno pode usar sem as chaves e em uma linha
*/
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

/* Cria parágrafo e o resultado */
/*
    parametro (msg)
    chamar a função resultado
    zerar o valor de resultado (result.innerHTML)
    criar paragrafo em uma const (createElement)
    add classe no p (classList.add)
    chamar o resultado p com (appendChild(p))
*/

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg
    resultado.appendChild(p);
}

function relogio() {
    function criaHoraComSegundos(segundos) {
        // const iniciar = document.querySelector('.iniciar');
        // const pausar = document.querySelector('.pausar');
        // const zerar = document.querySelector('.zerar');
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraComSegundos(segundos);
        }, 1000);
    }

    // melhor forma para capturar o event click
    document.addEventListener('click', function (e) {
        const el = e.target;
        // console.log(e.target);

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}
relogio();

/*
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado');

});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});
*/
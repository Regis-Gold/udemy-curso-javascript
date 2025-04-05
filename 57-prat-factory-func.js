// todos os metodos vão pra baixo
// atributos vão pra cima

// CALCULADORA COM FACTORY FUNCTION

/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.runAccount();
                }
            });
        },

        runAccount() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deletOne() {
            this.display.value = this.display.value.slice(0, -1);
        },


        clickBotoes() {
            // this > calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deletOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.runAccount();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/

// CALCULADORA COM CONSTRUCT FUNCTION (Aula 11)

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clickBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => { // keyup pega todas as teclas
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.runAccount();
            }
        });
    };

    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.runAccount();
        });
    };

    this.runAccount = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = (conta);
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();
/***** Exemplo 1 *****/
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' Está Ligado');
            return;
        }
        
        this.ligado = true;
    }
    
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Está Desligado');
            return;
        }
        
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);
console.log('******************************************************');

/***** Exemplo 2 *****/
// Extendendo class
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('iPhone','Preto', 'iPhone 13 Pro');
s1.ligar();
s1.ligar();
s1.desligar();
s1.desligar();
console.log(s1);
console.log('******************************************************');

/***** Exemplo 3 *****/
// Estendendo outra class
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar.');
    }

    falaOi() {
        console.log('Oi estou iniciando...');
    }
}
const t1 = new Smartphone('iPhone','Preto', 'iPhone 13 Pro Max');
console.log(t1);
console.log('******************************************************');

const t2 = new Tablet('iPad', true);
t2.ligar();
console.log(t2);
t2.falaOi();
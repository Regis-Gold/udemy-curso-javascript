/***** Exemplo 1 *****/
// Usando getter e setter com class
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    set velocidade(valor) {
        console.log('Usando Setter');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    
    get velocidade() {
        console.log('Usando Getter');
        return this[_velocidade];
    }
    
    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    frear() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 2000;
console.log(c1.velocidade);

/***** Exemplo 2 *****/
// Usando getter e setter com class
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomecompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomecompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Reginaldo', 'Luiz');
p1.nomecompleto = 'Reginaldo Luiz da Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomecompleto);
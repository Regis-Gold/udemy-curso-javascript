// factory function(função fábrica)
// construct function(função construtora)
// Quando uma função está dentro de um obj chamamos ela de método

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nomeCompleto} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Reginaldo', 'Luiz', 1.74, 64);
const p2 = criaPessoa('Luiz', 'Silva', 1.90, 85);
const p3 = criaPessoa('Maria', 'Oliveira', 1.50, 80);
console.log(p1.fala('falando sobre JavaScript'), p1.imc);
console.log(p2.fala('falando sobre TypeScript'), p2.imc);
console.log(p3.fala('falando sobre HTML e CSS'), p3.imc);

console.log(p3.nomeCompleto);
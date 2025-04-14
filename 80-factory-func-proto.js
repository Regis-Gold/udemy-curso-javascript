const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },
};

// const pessoaProto = {...falar, ...comer, ...beber};
const pessoaProto = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaProto, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  });
}

const p1 = criaPessoa('Reginaldo', 'Luiz');
const p2 = criaPessoa('Luiz', 'Silva');
console.log(p1);
console.log(p2);
// apesar de não ser especificamente um array ele se comporta de maneira similar ao array (ex: for, for in, for of...)
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const bkColorBody = estilosBody.backgroundColor;
console.log(bkColorBody);

for (let p of ps){
    p.style.backgroundColor = bkColorBody;
    p.style.color = '#fff';
}


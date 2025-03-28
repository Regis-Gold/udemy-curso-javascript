const elementos = [
    {tag: 'div', texto: '1 - div criada com js'},
    {tag: 'h1', texto: '2 - h1 criada com js'},
    {tag: 'p', texto: '3 - parágrafo criado com js'},
    {tag: 'footer', texto: '4 - footer criado com js'},
];

const container = document.querySelector('.container');
const section = document.createElement('section');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let criaTags = document.createElement(tag);
    //criaTags.innerText = texto; 
    // usar inner.HTML quando tiver tags no HTML

    // criar nó de texto
    let criaTexto = document.createTextNode(texto);
    section.appendChild(criaTags);
    criaTags.appendChild(criaTexto);
}

container.appendChild(section);
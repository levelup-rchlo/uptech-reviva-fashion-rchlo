export function criaTag(tag, classe, conteudo, tagPai, atributos) {
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    if (atributos) {
        atributos.forEach((atributo) => {
            elemento.setAttribute(atributo[0], atributo[1]);
        });
    }
    elemento.innerHTML = conteudo;
    return tagPai.appendChild(elemento);
}

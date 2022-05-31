export function criaTag(tag: string, classe: string, conteudo: string, tagPai: HTMLElement, atributos?: [string, string][]): HTMLElement {
    const elemento: HTMLElement = document.createElement(tag);
    elemento.classList.add(classe);
    if (atributos) {
        atributos.forEach((atributo) => {
            elemento.setAttribute(atributo[0], atributo[1]);
        })
    }
    elemento.innerHTML = conteudo;
    return tagPai.appendChild(elemento);
}

import { Produto } from "./modulos/produto.js";
import { criaTag } from "./modulos/createElement.js";
import { pullLocalStorage } from "./modulos/local-storage.js";

const itensMemoriaLocalStorage: Produto[] = pullLocalStorage("itens");
const containerProdutos: NodeListOf<Element> = document.querySelectorAll(".lista-itens");

function renderizarProdutos(itemDestino: Element) {
    for (let i = 0; i < 4; i++) {
        const listaProdutos: HTMLDivElement = document.createElement("div");
        listaProdutos.classList.add("produto");
        listaProdutos.setAttribute("id", "produtos-dinamicos");
        itemDestino.appendChild(listaProdutos);
    }
}
containerProdutos.forEach(item => renderizarProdutos(item));

const produtos: NodeListOf<HTMLElement> = document.querySelectorAll("#produtos-dinamicos");
itensMemoriaLocalStorage.forEach((produto: Produto, index: number) => {
    if (produto.quantidade_disponivel > 0) {
        aplicaProdutos(produtos[index], produto, index);
    }
});

function aplicaProdutos(local: HTMLElement, produto: Produto, index: number) {

    const container: HTMLElement = local;
    const produtoLinkImagem: HTMLElement = criaTag("a", "produto_link-imagem", "", container, [["href", "detalhes.html"]]);
    criaTag("img", "produto_imagem", "", produtoLinkImagem, [["src", produto.imagens[0].url.toString()], ["alt", produto.imagens[0].descricao]]);
    criaTag("img", "produto_imagem", "", produtoLinkImagem, [["src", produto.imagens[1].url.toString()], ["alt", produto.imagens[1].descricao]]);
    criaTag("img", "produto_imagem", "", produtoLinkImagem, [["src", produto.imagens[2].url.toString()], ["alt", produto.imagens[2].descricao]]);

    const produtoTamanhos: HTMLElement = criaTag("div", "produto_tamanhos", "", container);

    produto.tamanhos_disponiveis.forEach((tamanho: string) => {
        criaTag("input", "tamanhos_input", "", produtoTamanhos, [["type", "radio"], ["id", `tamanho-${tamanho}-${index}`], ["name", `tamanhos_modelo-${index}`]]);
        criaTag("label", "tamanhos_label", tamanho, produtoTamanhos, [["for", `tamanho-${tamanho}-${index}`]]);
    });

    const produtosEspecificacoes: HTMLElement = criaTag("a", "produtos_especificacoes", "", container, [["href", "#"]]);
    criaTag("h4", "especificacoes_nome", produto.nome, produtosEspecificacoes);
    criaTag("p", "especificacoes_valor", `R$ ${produto.preco.toFixed(2)}`, produtosEspecificacoes);

    const produtoBotaoSacola: HTMLElement = criaTag("div", "produto_botao-sacola", "", container);
    const botaoSacolaConteudo: HTMLElement = criaTag("div", "botao-sacola_conteudo", "", produtoBotaoSacola)
    const conteudoFrenteBotao: HTMLElement = criaTag("div", "conteudo_frente-botao", "", botaoSacolaConteudo);
    criaTag("button", "botao-sacola", "POR NA SACOLA", conteudoFrenteBotao);
    const costasBotao = criaTag("button", "conteudo_costas-botao", "", botaoSacolaConteudo);
    if (<number>produto.quantidade_carrinho  >= produto.quantidade_disponivel) {
        costasBotao.classList.add("costas-botao_indisponivel");
    }
}



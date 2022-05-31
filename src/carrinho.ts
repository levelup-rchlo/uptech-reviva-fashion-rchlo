import { pullLocalStorage, pushLocalStorage } from "./modulos/local-storage.js";
import { Produto } from "./modulos/produto.js";
import { criaTag } from "./modulos/createElement.js";
import { pegarIndiceObj } from "./estoque.js";

const itensMemoria: Produto[] = pullLocalStorage("itensSacola")
const itens: Produto[] = pullLocalStorage("itens")

function renderizarCarrinhoETotal(): void {
    itensMemoria.forEach((produto: Produto, index: number, array: Produto[]) => {
        renderizaProdutosCarrinho(produto, index);
        renderizarSubtotal(array);
    })
}
renderizarCarrinhoETotal();
function renderizaProdutosCarrinho(produto: Produto, index: number): void {

    const produtosCarrinho = <HTMLElement>document.querySelector("#carrinho");

    const carrinhoProduto: HTMLElement = criaTag("section", "carrinho_produto", "", produtosCarrinho, [["produto-carrinho", ""]]);

    criaTag("img", "produto_imagem", "", carrinhoProduto, [["src", produto.imagens[0].url.toString()], ["alt", produto.imagens[0].descricao]]);
    const produtoDescricao: HTMLElement = criaTag("div", "produto_descricao", "", carrinhoProduto);
    criaTag("h2", "descricao_titulo", "Produto", produtoDescricao, [["texto", produto.nome]]);
    criaTag("p", "descricao", produto.nome, produtoDescricao);

    const produtoTamanho: HTMLElement = criaTag("div", "produto_tamanho", "", carrinhoProduto);
    criaTag("h2", "tamanho_titulo", "Tamanho escolhido", produtoTamanho);
    criaTag("input", "tamanhos_input", "", produtoTamanho, [["type", "radio"], ["id", "tamanho-p-1"], ["name", `tamanhos_modelo-1`]]);

    produto.tamanhos_disponiveis.forEach((tamanho: string) => {
        criaTag("input", "tamanhos_input", "", produtoTamanho, [["type", "radio"], ["id", `tamanho-${tamanho}-${index}`], ["name", `tamanhos_modelo-${index}`]]);
        criaTag("label", "tamanhos_label", tamanho, produtoTamanho, [["for", `tamanho-${tamanho}-${index}`]]);
    });

    const produtoValor: HTMLElement = criaTag("div", "produto_valor", "", carrinhoProduto);
    criaTag("h2", "valor_titulo", "Valor", produtoValor);
    criaTag("p", "valor", `R$ ${produto.preco.toFixed(2)}`, produtoValor);

    const produtoQuantidade: HTMLElement = criaTag("div", "produto_quantidade", "", carrinhoProduto);
    criaTag("h2", "quantidade_titulo", "Quantidade", produtoQuantidade);
    criaTag("input", "quantidade", "", produtoQuantidade, [["type", "number"], ["value", `${produto.quantidade_carrinho}`], ["min", "1"], ["max", `${produto.quantidade_disponivel}`]]);
    const produtoSubtotal: HTMLElement = criaTag("div", "produto_subtotal", "", carrinhoProduto);
    criaTag("h2", "subtotal_titulo", "Subtotal", produtoSubtotal);
    criaTag("p", "subtotal", `R$ ${(<number>produto.quantidade_carrinho * produto.preco).toFixed(2)}`, produtoSubtotal);
}


function renderizarSubtotal(arrayTotal: Produto[]): void {
    const produtosCarrinho: HTMLElement = <HTMLElement>document.querySelector("#carrinho");
    const total: number = calculaSubtotal(arrayTotal);

    const carrinhoCheckout: HTMLElement = criaTag("div", "carrinho_checkout", "", produtosCarrinho);
    criaTag("p", "checkout_total", `Total R$ ${total.toFixed(2)}`, carrinhoCheckout);

    arrayTotal.forEach((valor) => {
        const somaTotal: string = `${valor.quantidade_carrinho} x ${valor.preco.toFixed(2)} = ${(<number>valor.quantidade_carrinho * valor.preco).toFixed(2)}`;
        criaTag("p", "checkout_valores", somaTotal, carrinhoCheckout);
    })
    criaTag("a", "checkout_botao", "Ir para pagamento", carrinhoCheckout, [["href", "#"]]);
}

function calculaSubtotal(array: Produto[]): number {
    return array.reduce(function (acumulador, item): number {
        return acumulador + <number>item.quantidade_carrinho * item.preco;
    }, 0);
}

function alterarQuantidade(): void {
    const listaInputs = document.querySelectorAll(".quantidade") as NodeListOf<HTMLInputElement>;
    listaInputs.forEach((input, index) => {
        input.addEventListener("change", function (): void {
            Number(input.value) > Number(input.max) ? input.value = input.max : input.value = input.value;
            itensMemoria[index].quantidade_carrinho = Number(input.value);
            const indexItens = pegarIndiceObj(itens, itensMemoria[index].url);
            itens[indexItens].quantidade_carrinho = Number(input.value);
            pushLocalStorage("itens", itens);
            pushLocalStorage("itensSacola", itensMemoria);
            renderizarSubtotal(itensMemoria);
        })
    })
}

alterarQuantidade()
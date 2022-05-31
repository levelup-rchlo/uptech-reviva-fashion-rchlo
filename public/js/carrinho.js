import { pullLocalStorage, pushLocalStorage } from "./modulos/local-storage.js";
import { criaTag } from "./modulos/createElement.js";
import { pegarIndiceObj } from "./estoque.js";
const itensMemoria = pullLocalStorage("itensSacola");
const itens = pullLocalStorage("itens");
function renderizarCarrinhoETotal() {
    itensMemoria.forEach((produto, index, array) => {
        renderizaProdutosCarrinho(produto, index);
        renderizarSubtotal(array);
    });
}
renderizarCarrinhoETotal();
function renderizaProdutosCarrinho(produto, index) {
    const produtosCarrinho = document.querySelector("#carrinho");
    const carrinhoProduto = criaTag("section", "carrinho_produto", "", produtosCarrinho, [["produto-carrinho", ""]]);
    criaTag("img", "produto_imagem", "", carrinhoProduto, [["src", produto.imagens[0].url.toString()], ["alt", produto.imagens[0].descricao]]);
    const produtoDescricao = criaTag("div", "produto_descricao", "", carrinhoProduto);
    criaTag("h2", "descricao_titulo", "Produto", produtoDescricao, [["texto", produto.nome]]);
    criaTag("p", "descricao", produto.nome, produtoDescricao);
    const produtoTamanho = criaTag("div", "produto_tamanho", "", carrinhoProduto);
    criaTag("h2", "tamanho_titulo", "Tamanho escolhido", produtoTamanho);
    criaTag("input", "tamanhos_input", "", produtoTamanho, [["type", "radio"], ["id", "tamanho-p-1"], ["name", `tamanhos_modelo-1`]]);
    produto.tamanhos_disponiveis.forEach((tamanho) => {
        criaTag("input", "tamanhos_input", "", produtoTamanho, [["type", "radio"], ["id", `tamanho-${tamanho}-${index}`], ["name", `tamanhos_modelo-${index}`]]);
        criaTag("label", "tamanhos_label", tamanho, produtoTamanho, [["for", `tamanho-${tamanho}-${index}`]]);
    });
    const produtoValor = criaTag("div", "produto_valor", "", carrinhoProduto);
    criaTag("h2", "valor_titulo", "Valor", produtoValor);
    criaTag("p", "valor", `R$ ${produto.preco.toFixed(2)}`, produtoValor);
    const produtoQuantidade = criaTag("div", "produto_quantidade", "", carrinhoProduto);
    criaTag("h2", "quantidade_titulo", "Quantidade", produtoQuantidade);
    criaTag("input", "quantidade", "", produtoQuantidade, [["type", "number"], ["value", `${produto.quantidade_carrinho}`], ["min", "1"], ["max", `${produto.quantidade_disponivel}`]]);
    const produtoSubtotal = criaTag("div", "produto_subtotal", "", carrinhoProduto);
    criaTag("h2", "subtotal_titulo", "Subtotal", produtoSubtotal);
    criaTag("p", "subtotal", `R$ ${(produto.quantidade_carrinho * produto.preco).toFixed(2)}`, produtoSubtotal);
}
function renderizarSubtotal(arrayTotal) {
    const produtosCarrinho = document.querySelector("#carrinho");
    const total = calculaSubtotal(arrayTotal);
    const carrinhoCheckout = criaTag("div", "carrinho_checkout", "", produtosCarrinho);
    criaTag("p", "checkout_total", `Total R$ ${total.toFixed(2)}`, carrinhoCheckout);
    arrayTotal.forEach((valor) => {
        const somaTotal = `${valor.quantidade_carrinho} x ${valor.preco.toFixed(2)} = ${(valor.quantidade_carrinho * valor.preco).toFixed(2)}`;
        criaTag("p", "checkout_valores", somaTotal, carrinhoCheckout);
    });
    criaTag("a", "checkout_botao", "Ir para pagamento", carrinhoCheckout, [["href", "#"]]);
}
function calculaSubtotal(array) {
    return array.reduce(function (acumulador, item) {
        return acumulador + item.quantidade_carrinho * item.preco;
    }, 0);
}
function alterarQuantidade() {
    const listaInputs = document.querySelectorAll(".quantidade");
    listaInputs.forEach((input, index) => {
        input.addEventListener("change", function () {
            Number(input.value) > Number(input.max) ? input.value = input.max : input.value = input.value;
            itensMemoria[index].quantidade_carrinho = Number(input.value);
            const indexItens = pegarIndiceObj(itens, itensMemoria[index].url);
            itens[indexItens].quantidade_carrinho = Number(input.value);
            pushLocalStorage("itens", itens);
            pushLocalStorage("itensSacola", itensMemoria);
            renderizarSubtotal(itensMemoria);
        });
    });
}
alterarQuantidade();

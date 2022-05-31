"use strict";
const estoque = [
    ['Camiseta Masculina', 5, 29.90],
    ['Calça Feminina', 8, 108.90]
];
function pegarIndiceDoProduto(estoque, nomeProduto) {
    return estoque.findIndex((itemEstoque) => itemEstoque[0] == nomeProduto);
}
function verificaSeProdutoExiste(estoque, nomeProduto) {
    return estoque.some((itemEstoque) => itemEstoque[0] == nomeProduto);
}
function adicionaAoEstoque(estoque, nomeProduto, quantidade, valor) {
    if (verificaSeProdutoExiste(estoque, nomeProduto)) {
        const indiceProduto = pegarIndiceDoProduto(estoque, nomeProduto);
        estoque[indiceProduto][1] += quantidade;
    }
    else {
        estoque.push([nomeProduto, quantidade, valor]);
    }
}
adicionaAoEstoque(estoque, 'Camiseta Masculina', 2, 29.90);
function disparaErro(quantidade) {
    console.error("Quantidade indisponível");
    console.error(`Disponivel: ${quantidade}`);
}
function darBaixaEmProduto(estoque, [produto, quantidade]) {
    estoque.map((valor) => {
        if (valor[0] == produto && quantidade > 0) {
            quantidade <= valor[1] ? valor[1] -= quantidade : disparaErro(valor[1]);
        }
        else if (valor[0] == produto) {
            valor[1] -= 1;
        }
    });
}
darBaixaEmProduto(estoque, ["Camiseta Masculina", 3]);
console.log(estoque);

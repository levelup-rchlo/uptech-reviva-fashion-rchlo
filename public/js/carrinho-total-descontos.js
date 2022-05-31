"use strict";
const carrinhoParaAplicarDescontos = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];
const desconto = 0.9;
const calculaTotal = (valor1, valor2) => valor1 + valor2;
const totalSemDesconto = carrinhoParaAplicarDescontos
    .map((valorProduto, indiceAtual) => {
    if (!produtosParaAplicarDesconto.includes(valorProduto) && carrinhoParaAplicarDescontos
        .includes(valorProduto, indiceAtual + 1)) {
        produtosParaAplicarDesconto.push(valorProduto);
        return valorProduto;
    }
    return valorProduto;
}).reduce(calculaTotal, 0);
const totalDosProdutosComDesconto = produtosParaAplicarDesconto
    .reduce((acc, valorAtual) => calculaTotal(acc, valorAtual * desconto), 0);
const totalASerSubtraindoDoTotal = produtosParaAplicarDesconto.reduce(calculaTotal, 0);
console.log(totalSemDesconto - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);

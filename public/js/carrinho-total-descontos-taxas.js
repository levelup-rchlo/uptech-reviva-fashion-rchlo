"use strict";
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
const descontoTodasCamisetas = 0.9;
const taxaCalcaJeans = 3.99;
const descontosAdicional = 0.95;
const getIndice = (arrayItem, nomeProduto) => {
    const somaIndices = [];
    arrayItem.filter((modeloProduto, index) => modeloProduto
        .includes(nomeProduto) ? somaIndices.push(index) : modeloProduto);
    return somaIndices;
};
const indiceCamisetas = getIndice(listaProdutos, "Camiseta");
const indiceCalcaJeans = getIndice(listaProdutos, "Calça Jeans");
const indiceBermuda = getIndice(listaProdutos, "Bermuda");
const descontoTodasCamisetasAplicado = indiceCamisetas
    .map((valor) => precos[valor] * descontoTodasCamisetas);
const produtosParaAplicarDesconto = [];
const descontoMaisDeUmaPecaAplicado = descontoTodasCamisetasAplicado
    .map((valorProduto, indiceAtual) => {
    if (!produtosParaAplicarDesconto
        .includes(valorProduto) && descontoTodasCamisetasAplicado
        .includes(valorProduto, indiceAtual + 1)) {
        produtosParaAplicarDesconto.push(valorProduto);
        return valorProduto;
    }
    return valorProduto;
}).reduce(calculaTotal, 0);
const totalDeCamisetaComDescontos = (descontoMaisDeUmaPecaAplicado - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);
const calcasComTaxa = indiceCalcaJeans.map((valor) => precos[valor]).reduce((acc, valor) => acc += valor);
const valorTotalBermudas = indiceBermuda.map((valor) => precos[valor]);
const totalBermudas = valorTotalBermudas.reduce((acc, valorAtual) => acc + valorAtual);
const resultadoFinal = totalDeCamisetaComDescontos + calcasComTaxa + totalBermudas + (taxaCalcaJeans * 2);
console.log(resultadoFinal);

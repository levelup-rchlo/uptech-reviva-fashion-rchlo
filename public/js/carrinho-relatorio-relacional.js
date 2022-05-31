"use strict";
const listaProdutos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];
const listaPrecoProdutos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
const verificaQtsUnidadesCompradas = (arrayProduto, nomeProduto) => arrayProduto
    .filter((nomeLista) => nomeLista == nomeProduto)
    .reduce((acc) => acc += 1, 0);
const produtoOuPrecoUnitario = (arrayParaAnalise) => {
    const umValorDeCada = [];
    arrayParaAnalise.filter((valor) => !umValorDeCada.includes(valor) ? umValorDeCada.push(valor) : valor);
    return umValorDeCada;
};
const arrayQuantidadeUnitaria = produtoOuPrecoUnitario(listaProdutos);
const relatorioCompra = (arrayProduto, arrayPrecos, valoresUnitarios) => valoresUnitarios.map((produto, indice) => {
    const qtd = verificaQtsUnidadesCompradas(arrayProduto, produto);
    const valorTratado = produtoOuPrecoUnitario(arrayPrecos)[indice].toLocaleString("pt-br", { currency: "BRL", style: "currency" });
    return (`${qtd}x - ${produto} - ${valorTratado} `);
});
console.log(relatorioCompra(listaProdutos, listaPrecoProdutos, arrayQuantidadeUnitaria));

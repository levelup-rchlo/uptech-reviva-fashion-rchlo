"use strict";
const produtosCarrinho = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00]
];
const calcularDesconto = (porcentagem) => Math.abs((porcentagem / 100) - 1);
const calcularTaxaAdicional = (valor, porcentagem) => valor * porcentagem / 100;
const verificaVolumePedido = (valor) => valor > 500 ? valor - 50 : valor;
const descontoParaMaisDeUmaPeca = (listaDeProdutos) => listaDeProdutos
    .filter((produto) => produto[1] > 1)
    .map((valorProduto) => {
    if (typeof valorProduto[2] === 'number') {
        return valorProduto[2] *= calcularDesconto(5);
    }
    else {
        return 0;
    }
});
descontoParaMaisDeUmaPeca(produtosCarrinho);
const descontoParaJeans = (listaDeProdutos, nomeProduto) => listaDeProdutos
    .filter((produto) => produto[0].toString()
    .includes(nomeProduto))
    .map((valorProduto) => {
    if (typeof valorProduto[2] === 'number') {
        return valorProduto[2] += calcularTaxaAdicional(valorProduto[2], 1.5);
    }
    else {
        return 0;
    }
});
descontoParaJeans(produtosCarrinho, "Jeans");
const totalValores = (listaProdutos) => listaProdutos
    .map((produto) => {
    if (typeof produto[2] === 'number' && typeof produto[1] === 'number') {
        return produto[2] * produto[1];
    }
    else {
        return 0;
    }
})
    .reduce((accm, valores) => accm += valores);
console.log(verificaVolumePedido(totalValores(produtosCarrinho)));

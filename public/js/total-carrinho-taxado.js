"use strict";
const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];
const valorLimiteTaxa = 70.00;
const porcentagemTaxa = 7;
const calcularPorcentagem = (valor) => valor * porcentagemTaxa / 100;
const calculaTotalCarrinho = (listaDeValores) => listaDeValores
    .map((valorCarrinho) => valorCarrinho >= valorLimiteTaxa ? calcularPorcentagem(valorCarrinho) + valorCarrinho : valorCarrinho)
    .reduce((total, valor) => total += valor);
console.log(calculaTotalCarrinho(carrinho));

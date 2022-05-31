"use strict";
const valoresCarrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];
const totalCarrinho = (listaProdutos) => listaProdutos.reduce((acum, atual) => atual + acum, 0);
console.log(totalCarrinho(valoresCarrinho));

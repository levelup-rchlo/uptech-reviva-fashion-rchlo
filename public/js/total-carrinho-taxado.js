const { TypeFormatFlags } = require("typescript");

const minTaxa = 70;
const taxa = 1.07;
const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

const total = carrinho.reduce((total, atual) => {
  const temTaxa = atual >= minTaxa;
  const valorTaxa = temTaxa ? atual * taxa : atual
  return total + valorTaxa;
},0)

console.log(total)
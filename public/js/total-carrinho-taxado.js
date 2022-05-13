const { TypeFormatFlags } = require("typescript");

const minTaxa = 70;
const taxa = 1.07;
const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

const total = carrinho.reduce((total, carrinho) => {
  const taxaSe = carrinho >= minTaxa;
  const valorTaxa = taxaSe ? carrinho * taxa : carrinho
  return total + valorTaxa;
})

console.log(total)
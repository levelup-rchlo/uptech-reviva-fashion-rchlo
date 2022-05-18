const produtos = [
  ['Calça Jeans Masculina', 3, 109.89],
  ['Camiseta Básica Feminina', 2, 19.90],
  ['Boné Unissex', 1, 25.00],
  ['Saia Feminina', 1, 35.00],
  ['Calça Jeans Feminina', 1, 150.00]
]

const carrinho = produtos.map((valorAtual) => {
  const nome = valorAtual[0];
  const quantidade = valorAtual[1];
  const valorUnitario = valorAtual[2];
  let totalItem = 0;
  let valorDinamico = valorAtual[2];

  if (nome.indexOf("Jeans") != -1) {
    valorDinamico = valorDinamico * 1.015;
  }

  for (let i = 0; i < quantidade; i++) {
    if (i > 0) {
      totalItem = totalItem + (valorDinamico * .95);
    } else {
      totalItem = totalItem + valorDinamico
    }
  }
  return {
    nome,
    quantidade,
    valorUnitario,
    totalItem
  }
})
const total = carrinho.reduce((acc, valorAtual) => {
  return acc + valorAtual.totalItem
}, 0)

console.log({
  carrinho,
  total: total > 500 ? total - 50 : total
})
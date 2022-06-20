const estoque = [
  ["Camiseta Masculina", 5, 29.9],
  ["Calça Feminina", 8, 108.9],
];

const addStock = (estoque, produto) => {
  let p = estoque.find((o) => o[0] === produto[0]);
  if (p) {
    p[1] += produto[1];
  } else {
    estoque.push(produto);
  }
  return estoque;
};
console.log("> ADD STOCK:", addStock(estoque, ["Camiseta Masculina", 2, 29.9]));
console.log("> ADD STOCK:", addStock(estoque, ["Camiseta Flanela", 10, 29.9]));
console.log("> ADD STOCK:", addStock(estoque, ["Calça Feminina", 1, 29.9]));
console.log("> ADD STOCK:", addStock(estoque, ["Calça Jeans", 1, 29.9]));
console.log(
  "> ADD STOCK:",
  addStock(estoque, ["Camiseta Masculina", 20, 29.9])
);

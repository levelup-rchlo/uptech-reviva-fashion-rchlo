const stock = [
  ["Camiseta Masculina", 5, 29.9],
  ["Calça Feminina", 8, 108.9],
];

const addStock = (stockList, product) => {
  let productFound = stockList.find((o) => o[0] === product[0]);
  if (productFound) {
    productFound[1] += product[1];
  } else {
    stockList.push(product);
  }
  return stockList;
};

const removeStock = (stockList, product) => {
  let error = "";
  let productFound = stockList.find((o) => o[0] === product[0]);
  if (!productFound) {
    error = "Produto não encontrado!";
    console.error(error);
    // throw new Error(error);
  } else {
    product[1] = product[1] ? product[1] : 1;
    if (product[1] <= productFound[1]) {
      productFound[1] -= product[1] ? product[1] : 1;
    } else {
      error = "Quantidade informada não está disponível!";
      console.error(error);
      // throw new Error(error);
    }
  }
  return stockList;
};

console.log("> ADD STOCK:", addStock(stock, ["Camiseta Masculina", 2, 29.9]));
console.log("> ADD STOCK:", addStock(stock, ["Camiseta Flanela", 10, 29.9]));
console.log("> ADD STOCK:", addStock(stock, ["Calça Feminina", 1, 29.9]));
console.log("> ADD STOCK:", addStock(stock, ["Calça Jeans", 1, 29.9]));
console.log("> ADD STOCK:", addStock(stock, ["Camiseta Masculina", 20, 29.9]));
console.log("> DEL STOCK:", removeStock(stock, ["Camiseta Masculina"]));
console.log("> DEL STOCK:", removeStock(stock, ["Camiseta Masculina", 20]));
console.log("> DEL STOCK:", removeStock(stock, ["Camiseta Nike", 20]));
console.log("> DEL STOCK:", removeStock(stock, ["Calça Jeans", 2, 29.9]));

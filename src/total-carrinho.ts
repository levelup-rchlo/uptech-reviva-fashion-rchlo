const valoresCarrinho : number[]= [39.90, 75.99, 24, 12, 109.99, 83.99];
const totalCarrinho = (listaProdutos : number[]) : number => listaProdutos.reduce((acum,atual) => atual + acum,0);

console.log(totalCarrinho(valoresCarrinho));

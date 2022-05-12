const { nodeModuleNameResolver } = require("typescript")

const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]
var total = carrinho.reduce((total, carrinho) => total + carrinho, 0)
console.log(total)
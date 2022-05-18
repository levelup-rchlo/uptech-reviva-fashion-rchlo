const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]
const distincao = []
const carrinho = []

const carrinhoProcessado = produtos.map((itemAtual, indice) => ( {
      categoria: itemAtual,
      preco: precos[indice]
  }))

carrinhoProcessado.forEach((produto) => {
  if (!distincao.includes(produto.categoria)){
    const ocorrencias = carrinhoProcessado.filter((produtoIgual) => {
      return produtoIgual.categoria == produto.categoria
    }).length;

    distincao.push(produto.categoria)

    carrinho.push({
      categoria:produto.categoria, 
      preco:produto.preco, 
      quantidade:ocorrencias
    }) 
  }
})

console.log(carrinho)
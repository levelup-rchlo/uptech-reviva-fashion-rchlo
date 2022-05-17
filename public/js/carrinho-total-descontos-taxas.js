const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const carrinho = []

const carrinhoProcessado = produtos.map((itemAtual, indice) => {
    let produto = {
      categoria: itemAtual,
      preco: precos[indice]
    }
    if (produto.categoria.indexOf("Jeans") != -1) {
      produto.preco = produto.preco + 3.99
    }
    if (produto.categoria.indexOf("Camiseta") != -1) {
      produto.preco = produto.preco * .9;
    }
    const incidencia = carrinho.filter((elemento) => {
      if (elemento.categoria === produto.categoria) {
        return elemento
      }
    }).length
    if (incidencia == 1) {
      produto.preco = produto.preco * .95;
    }
    carrinho.push({
      categoria: itemAtual,
      preco: precos[indice]
    })
    return produto;
  })
const totalCarrinho = carrinhoProcessado.reduce((acc, valorAtual) => {
  return acc + valorAtual.preco
},0)
console.log({
  carrinho,
  carrinhoProcessado,
  totalCarrinho
})
  
const produtos = [{
  nome: "Camiseta Básica",
  preco: 29.90,
},
{
  nome: "Camiseta Polo",
  preco: 49.90,
},
{
  nome: "Bermuda Moletom",
  preco: 35,
},
{
  nome: "Calça Jeans Masculina",
  preco: 89.99,
},
{
  nome: "Camiseta Básica",
  preco: 29.90,
},
{
  nome: "Calça Jeans Feminina",
  preco: 109.99,
},
{
  nome: "Camiseta Básica",
  preco: 29.99,
},
]

const distincao = []

const produtosNovo = produtos.map(function(produto){
  if (!distincao.includes(produto.nome)){
    const ocorrencias = produtos.filter(function(produtoIgual){
      return produtoIgual.nome == produto.nome
    }).length;

    distincao.push(produto.nome)

    return {
      nome:produto.nome, 
      preco:produto.preco, 
      ocorrencias
    }
  }
})

console.log(produtosNovo)
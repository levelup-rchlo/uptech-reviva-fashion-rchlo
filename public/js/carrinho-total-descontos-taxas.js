const desconto10 = 0.90;
const desconto5 = 0.95;
const taxa = 3.99;

const produtos = [{
  nome: "Camiseta Básica",
  preco: 29.90,
  categoria: "Camiseta"
},
{
  nome: "Camiseta Polo",
  preco: 49.90,
  categoria: "Camiseta"
},
{
  nome: "Bermuda Moletom",
  preco: 35,
  categoria: "Moletom"
},
{
  nome: "Calça Jeans Masculina",
  preco: 89.99,
  categoria: "Jeans"
},
{
  nome: "Camiseta Básica",
  preco: 29.90,
  categoria: "Camiseta"
},
{
  nome: "Calça Jeans Feminina",
  preco: 109.99,
  categoria: "Jeans"
},
{
  nome: "Camiseta Básica",
  preco: 29.99,
  categoria: "Camiseta"
},
]

const calculaTotal = (valor1, valor2) => valor1 + valor2;

const produtosComDesconto = [];

const produtosCarrinho = produtos.map(function(produto){
  // console.log(produto.nome)
  // console.log("ProdutosComDesconto",produtosComDesconto)
  const ocorrencias = produtosComDesconto.filter(function(produtoDescontado){
    return produtoDescontado.nome == produto.nome;
  })
  // console.log("ocorrencias",ocorrencias.length)

  if (produto.categoria == "Camiseta") {
    produto.preco = produto.preco * desconto10;
    produto.desconto10 = true;
    produtosComDesconto.push(produto)
  }

  if (ocorrencias.length == 1) {
    produto.preco = produto.preco * desconto5
    produto.desconto5 = true;
  }

  if (produto.categoria == "Jeans") {
    produto.preco = produto.preco + taxa;
    produto.taxa = true;
  }
  // console.log("-------------------------------------------")
  return produto;
})

console.log(produtosCarrinho)

const totalCarrinho = produtosCarrinho.map(function(produtoCarrinho){
  return produtoCarrinho.preco;
}).reduce(calculaTotal)

console.log(totalCarrinho)

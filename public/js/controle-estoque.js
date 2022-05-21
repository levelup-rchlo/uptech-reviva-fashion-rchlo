const estoque = [
  ['Camiseta Masculina', 5, 29.90],
  ['Calça Feminina', 8, 108.90]
]
function adicionaAoEstoque(estoque, nomeProduto, quantidade, valor) {
  if (estoque.reduce(valor => valor[0] == nomeProduto)) {
    estoque[0][1] += quantidade
  }else{
    estoque.push([nomeProduto, quantidade, valor])
  }
}
adicionaAoEstoque(estoque, "Camiseta Preta", 2, 30)
//-------------------------------------------------------------------------------------
// Desafio #2

function disparaErro(valor) {
  console.error("Quantidade indisponível");
  console.error(`Disponivel: ${valor}`);
}

function darBaixaEmProduto(estoque, [produto, quantidade]) {
  estoque.map((valor) => {
    if (valor[0] == produto && quantidade > 0) {
      quantidade <= valor[1] ? valor[1] -= quantidade : disparaErro(valor[1]);
    } else if (valor[0] == produto) {
      valor[1] -= 1;
    }
  });
}

darBaixaEmProduto(estoque, ["Camiseta Preta", 6]);
console.log(estoque);
type ListaEstoque = (string | number);

const estoque : ListaEstoque[][] = [
  ['Camiseta Masculina', 5, 29.90],
  ['Calça Feminina', 8, 108.90]
];

function pegarIndiceDoProduto(estoque : ListaEstoque[][], nomeProduto : string): number {
  return estoque.findIndex((itemEstoque : ListaEstoque[]) => itemEstoque[0] == nomeProduto);
}

function verificaSeProdutoExiste(estoque : ListaEstoque[][], nomeProduto : string) : boolean {
  return estoque.some((itemEstoque: ListaEstoque[]) => itemEstoque[0] == nomeProduto);
}

function adicionaAoEstoque(estoque : any, nomeProduto : string, quantidade : number, valor : number): void {
  if (verificaSeProdutoExiste(estoque, nomeProduto)) {
      const indiceProduto: number = pegarIndiceDoProduto(estoque, nomeProduto);
      estoque[indiceProduto][1] += quantidade;
  } else {
      estoque.push([nomeProduto, quantidade, valor]);
  }
}

adicionaAoEstoque(estoque, 'Camiseta Masculina', 2, 29.90);

function disparaErro(quantidade : string) : void {
  console.error("Quantidade indisponível");
  console.error(`Disponivel: ${quantidade}`);
}

function darBaixaEmProduto(estoque : ListaEstoque[][] , [produto, quantidade] : [string, number]): void {
  estoque.map((valor : any) => {
    if (valor[0] == produto && quantidade > 0) {
      quantidade <= valor[1] ? valor[1] -= quantidade : disparaErro(valor[1]);
    } else if (valor[0] == produto) {
      valor[1] -= 1;
    }
  });
}

darBaixaEmProduto(estoque, ["Camiseta Masculina", 3]);
console.log(estoque);
const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const produtosDesconto10 = precos.filter((_, indice) => produtos[indice] === 'Camiseta Básica');
const produtos2Desconto10 = precos.filter((_, indice) => produtos[indice] === 'Camiseta Polo');

const geral_produto_desconto10 = produtosDesconto10.concat(produtos2Desconto10);

const total_desconto10 = geral_produto_desconto10.map(function(geral_produto_desconto10){
    return geral_produto_desconto10 * 0.9;
})

console.log(`Valores dos produtos com 10% de desconto: ${total_desconto10}`);

const total_desconto10_ordenado = total_desconto10.sort();

const valorDescontoAdicional = []
const descontoAdicional = total_desconto10_ordenado.map(function(valorProduto, indice, array){
    if(valorProduto === array[indice-1] && !valorDescontoAdicional.includes(valorProduto)){
        valorDescontoAdicional.push(valorProduto);
        return valorProduto - (valorProduto * 0.05);
    }
    return valorProduto;
})

console.log(`Valores dos produtos com o desconto adicional de 5% de desconto: ${descontoAdicional}`);

const produtosTaxa = precos.filter((_, indice) => produtos[indice]=== 'Calça Jeans Masculina');
const produtosTaxa2 = precos.filter((_, indice) => produtos[indice]=== 'Calça Jeans Feminina');

const produtosTaxasUnificados = produtosTaxa.concat(produtosTaxa2);
console.log(`Valores dos produtos que serao taxados: ${produtosTaxasUnificados}`);

const ProdutosTaxados = produtosTaxasUnificados.map(function(produtosTaxasUnificados){
    return (produtosTaxasUnificados + 3.99);
})
console.log(`Valores dos produtos com sua taxa de 3,99: ${ProdutosTaxados}`);

const calculosProdutosTotais = (valor, valor2) => valor + valor2;

const totalCarrinhoSemtaxaDesconto = precos.reduce(calculosProdutosTotais,0);

console.log(`Total do carrinho sem desconto e taxas: ${totalCarrinhoSemtaxaDesconto }`);

const totalValoreSeraoDescontados10 = geral_produto_desconto10.reduce(calculosProdutosTotais,0);

const totalValoreComDesconto = descontoAdicional.reduce(calculosProdutosTotais,0);

const totalValoreseraoTaxados = produtosTaxasUnificados.reduce(calculosProdutosTotais,0);

const totalProdutosTaxados = ProdutosTaxados.reduce(calculosProdutosTotais,0);

const totalCarrinho = totalCarrinhoSemtaxaDesconto - totalValoreSeraoDescontados10 + totalValoreComDesconto - totalValoreseraoTaxados + totalProdutosTaxados;

console.log(`Total do carrinho com descontos e taxas: ${totalCarrinho}`);
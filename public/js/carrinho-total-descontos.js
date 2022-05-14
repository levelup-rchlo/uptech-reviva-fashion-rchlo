const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];
const desconto = 0.9;

const calculaTotal = (valor1, valor2) => valor1 + valor2;

const produtosParaDesconto = [];

const totalSemDesconto = carrinho
    .map((valorProduto, indiceAtual) => {
        if (!produtosParaDesconto.includes(valorProduto) && carrinho.includes(valorProduto, indiceAtual + 1)) {
            produtosParaDesconto.push(valorProduto);
            return valorProduto;
        }
        return valorProduto;
        
    }).reduce(calculaTotal, 0);

const totalDosProdutosComDesconto = produtosParaDesconto
    .reduce((acc, valorAtual) => calculaTotal(acc, valorAtual * desconto), 0);

const totalASerSubtraindoDoTotal = produtosParaDesconto.reduce(calculaTotal, 0);

console.log(totalSemDesconto - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto)
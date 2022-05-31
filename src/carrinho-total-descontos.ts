const carrinhoParaAplicarDescontos : number[] = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];
const desconto : number = 0.9;

const calculaTotal = (valor1 : number, valor2 : number) => valor1 + valor2;

const totalSemDesconto : number = carrinhoParaAplicarDescontos
    .map((valorProduto : number, indiceAtual : number) => {
        if (!produtosParaAplicarDesconto.includes(valorProduto) && carrinhoParaAplicarDescontos
        .includes(valorProduto, indiceAtual + 1)) {
            produtosParaAplicarDesconto.push(valorProduto);
            return valorProduto;
        }
        return valorProduto;
    }).reduce(calculaTotal, 0);

const totalDosProdutosComDesconto : number= produtosParaAplicarDesconto
    .reduce((acc : number, valorAtual : number) => calculaTotal(acc, valorAtual * desconto), 0);

const totalASerSubtraindoDoTotal : number = produtosParaAplicarDesconto.reduce(calculaTotal, 0);

console.log(totalSemDesconto - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);


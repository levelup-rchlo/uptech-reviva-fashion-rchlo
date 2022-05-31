const precos: number[] = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
const descontoTodasCamisetas: number = 0.9;
const taxaCalcaJeans: number = 3.99;
const descontosAdicional: number = 0.95;

const getIndice = (arrayItem: string[], nomeProduto: string): number[] => {
    const somaIndices: number[] = [];
    arrayItem.filter((modeloProduto: string, index: number) => modeloProduto
        .includes(nomeProduto) ? somaIndices.push(index) : modeloProduto);
    return somaIndices;
}

const indiceCamisetas: number[] = getIndice(listaProdutos, "Camiseta");
const indiceCalcaJeans: number[] = getIndice(listaProdutos, "Calça Jeans");
const indiceBermuda: number[] = getIndice(listaProdutos, "Bermuda");

const descontoTodasCamisetasAplicado: number[] = indiceCamisetas
    .map((valor: number) => precos[valor] * descontoTodasCamisetas);
const produtosParaAplicarDesconto: number[] = [];

const descontoMaisDeUmaPecaAplicado: number = descontoTodasCamisetasAplicado
    .map((valorProduto: number, indiceAtual: number) => {
        if (!produtosParaAplicarDesconto
            .includes(valorProduto) && descontoTodasCamisetasAplicado
                .includes(valorProduto, indiceAtual + 1)) {
            produtosParaAplicarDesconto.push(valorProduto);
            return valorProduto;
        }
        return valorProduto;

    }).reduce(calculaTotal, 0);

const totalDeCamisetaComDescontos: number = (descontoMaisDeUmaPecaAplicado - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);

const calcasComTaxa: number = indiceCalcaJeans.map((valor: number) => precos[valor]).reduce((acc: number, valor: number) => acc += valor);

const valorTotalBermudas: number[] = indiceBermuda.map((valor: number) => precos[valor]);


const totalBermudas: number = valorTotalBermudas.reduce((acc: number, valorAtual: number) => acc + valorAtual);

const resultadoFinal: number = totalDeCamisetaComDescontos + calcasComTaxa + totalBermudas + (taxaCalcaJeans * 2);

console.log(resultadoFinal);

















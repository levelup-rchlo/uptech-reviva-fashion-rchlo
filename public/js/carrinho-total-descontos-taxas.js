const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]
const descontoTodasCamisetas = 0.9;
const taxaCalcaJeans = 3.99;
const descontosAdicional = 0.95;
// ----------------------------------------------------------------------------------------------------
// Pegando o índice pelo nome do produto e separando o índex

const pegaIndice = (arrayItem, nomeProduto) => {
    const somaIndices = [];
    arrayItem.filter((modeloProduto, index) => modeloProduto.includes(nomeProduto) ? somaIndices.push(index) : modeloProduto)
    return somaIndices;
}

const indiceCamisetas = pegaIndice(produtos, "Camiseta");
const indiceCalcaJeans = pegaIndice(produtos, "Calça Jeans");
const indiceBermuda = pegaIndice(produtos, "Bermuda");

// ----------------------------------------------------------------------------------------------------
// Desconto de 10% aplicado nas camisetas

const descontoTodasCamisetasAplicado = indiceCamisetas.map((valor) => precos[valor] * descontoTodasCamisetas)
// ---------------------------------------------------------------------------------------------------------------------
// Desconto de 5% para mais de uma camiseta

const calculaTotal = (valor1, valor2) => valor1 + valor2;

const produtosParaDesconto = [];

const descontoMaisDeUmaPecaAplicado = descontoTodasCamisetasAplicado
    .map((valorProduto, indiceAtual) => {
        if (!produtosParaDesconto.includes(valorProduto) && descontoTodasCamisetasAplicado.includes(valorProduto, indiceAtual + 1)) {
            produtosParaDesconto.push(valorProduto);
            return valorProduto;
        }
        return valorProduto;

    }).reduce(calculaTotal, 0);
const totalDosProdutosComDesconto = produtosParaDesconto
    .reduce((acc, valorAtual) => calculaTotal(acc, valorAtual * descontosAdicional), 0);

const totalASerSubtraindoDoTotal = produtosParaDesconto.reduce(calculaTotal);

const totalDeCamisetaComDescontos = (descontoMaisDeUmaPecaAplicado - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);
// ---------------------------------------------------------------------------------------------------------------------
// Valor Calças Jeans com taxa
const calcasComTaxa = indiceCalcaJeans.map(valor => precos[valor]).reduce((acc, valor) => acc += valor);
// ---------------------------------------------------------------------------------------------------------------------
// Valor Bermudas
const valorTotalBermudas = indiceBermuda.map(valor => precos[valor])

// ---------------------------------------------------------------------------------------------------------------------

const totalBermudas = valorTotalBermudas.reduce((accm, valorAtual) => accm + valorAtual)

const resultadoFinal = totalDeCamisetaComDescontos + calcasComTaxa + totalBermudas + (taxaCalcaJeans * 2);

console.log(resultadoFinal);

















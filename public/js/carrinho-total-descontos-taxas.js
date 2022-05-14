const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]
const desconto = 0.9;
const taxaCalcaJeans = 3.99;

// ----------------------------------------------------------------------------------------------------
// Pegando o índice pelo nome do produto e separando o índex

let indiceCamisetas = [];
const camisetas = produtos.filter((modeloProduto, index) => {
    if (modeloProduto.includes("Camiseta")) {
        indiceCamisetas.push(index);
        return modeloProduto.includes("Camiseta")
    }
})

let indiceCalcaJeans = [];
const calcaJeans = produtos.filter((modeloProduto, index) => {
    if (modeloProduto.includes("Calça Jeans")) {
        indiceCalcaJeans.push(index);
        return modeloProduto.includes("Calça Jeans")
    }
})

let indiceBermuda = [];
const bermuda = produtos.filter((modeloProduto, index) => {
    if (modeloProduto.includes("Bermuda")) {
        indiceBermuda.push(index);
        return modeloProduto.includes("Bermuda")
    }
})

// ----------------------------------------------------------------------------------------------------
// Desconto de 10% aplicado nas camisetas

const camisetasComDescontoAplicado = indiceCamisetas.map((valor) => {
    return precos[valor] * desconto;
})

// ---------------------------------------------------------------------------------------------------------------------
// Desconto de 5% para mais de uma camiseta

camisetasComDescontoAplicado
const descontosAdicional = 0.95;

const calculaTotal = (valor1, valor2) => valor1 + valor2;

const produtosParaDesconto = [];

const totalSemDesconto = camisetasComDescontoAplicado
    .map((valorProduto, indiceAtual) => {
        if (!produtosParaDesconto.includes(valorProduto) && camisetasComDescontoAplicado.includes(valorProduto, indiceAtual + 1)) {
            produtosParaDesconto.push(valorProduto);
            return valorProduto;
        }
        return valorProduto;

    }).reduce(calculaTotal,0);

const totalDosProdutosComDesconto = produtosParaDesconto
    .reduce((acc, valorAtual) => calculaTotal(acc, valorAtual * descontosAdicional), 0);

const totalASerSubtraindoDoTotal = produtosParaDesconto.reduce(calculaTotal);

const totalDeCamisetaComDescontos = (totalSemDesconto - totalASerSubtraindoDoTotal + totalDosProdutosComDesconto);
// ---------------------------------------------------------------------------------------------------------------------
// Valor Calças Jeans com taxa
const calcasComTaxa = indiceCalcaJeans.map(valor => precos[valor] + taxaCalcaJeans);
// ---------------------------------------------------------------------------------------------------------------------
// Valor Bermudas
const valorTotalBermudas = indiceBermuda.map((valor) => {
    return precos[valor];
})

// ---------------------------------------------------------------------------------------------------------------------

const totalCalcas = calcasComTaxa.reduce((accm, valorAtual) => accm + valorAtual )
const totalBermudas = valorTotalBermudas.reduce((accm, valorAtual) => accm + valorAtual)

const resultadoFinal = totalDeCamisetaComDescontos + totalCalcas + totalBermudas;

console.log(camisetas);
console.log(calcaJeans);
console.log(bermuda);
console.log(indiceCamisetas);
console.log(indiceCalcaJeans);
console.log(indiceBermuda);
console.log(camisetasComDescontoAplicado);
console.log(totalCalcas);

console.log(resultadoFinal);

















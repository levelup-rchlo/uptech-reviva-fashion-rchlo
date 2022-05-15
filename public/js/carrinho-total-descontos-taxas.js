const produtos = ['Camiseta Básica','Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]
const descontoTodasCamisetas = 0.9;
const taxaCalcaJeans = 3.99;

// ----------------------------------------------------------------------------------------------------
// Pegando o índice pelo nome do produto e separando o índex

let pegaIndice = (nomeProduto) => { 
    let somaIndices = [];
    produtos.filter((modeloProduto, index) => {
        if (modeloProduto.includes(nomeProduto)) {
            somaIndices.push(index);
        }})
        return somaIndices;
}

let indiceCamisetas = pegaIndice("Camiseta");
let indiceCalcaJeans = pegaIndice("Calça Jeans");
let indiceBermuda = pegaIndice("Bermuda");

// ----------------------------------------------------------------------------------------------------
// Desconto de 10% aplicado nas camisetas

const camisetasComDescontoAplicado = indiceCamisetas.map((valor) => precos[valor] * descontoTodasCamisetas)

// ---------------------------------------------------------------------------------------------------------------------
// Desconto de 5% para mais de uma camiseta

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
const calcasComTaxa = indiceCalcaJeans.map(valor => precos[valor]).reduce((acc, valor) => acc += valor);

// ---------------------------------------------------------------------------------------------------------------------
// Valor Bermudas
const valorTotalBermudas = indiceBermuda.map(valor => precos[valor])

// ---------------------------------------------------------------------------------------------------------------------

const totalBermudas = valorTotalBermudas.reduce((accm, valorAtual) => accm + valorAtual)

const resultadoFinal = totalDeCamisetaComDescontos + calcasComTaxa + totalBermudas + (taxaCalcaJeans * 2);

console.log(resultadoFinal);

















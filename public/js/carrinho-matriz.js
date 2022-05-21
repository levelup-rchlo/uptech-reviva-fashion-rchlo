const produtos = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00]
];

const calcularDesconto = porcentagem => Math.abs((porcentagem / 100) - 1);
const calcularTaxaAdicional = (valor, porcentagem) => valor * porcentagem / 100;
const verificaVolumePedido = valor => valor > 500 ? valor - 50 : valor;
// -----------------------------------------------
// 5%
const descontoParaMaisDeUmaPeca = listaDeProdutos => listaDeProdutos.filter(produto => produto[1] > 1)
    .map(valorProduto => valorProduto[2] *= calcularDesconto(5));

descontoParaMaisDeUmaPeca(produtos);
// -----------------------------------------------
// 1.5%
const descontoParaJeans = (listaDeProdutos, nomeProduto) => listaDeProdutos.filter(produto => produto[0].includes(nomeProduto))
    .map(valorProduto => valorProduto[2] += calcularTaxaAdicional(valorProduto[2], 1.5));

descontoParaJeans(produtos,"Jeans");
// -----------------------------------------------
// Soma total dos produtos e aplica desconto acima de 500 reais
const totalValores = listaProdutos => listaProdutos
    .map((produto) => produto[2] * produto[1])
    .reduce((accm, valores) => accm += valores);

console.log(verificaVolumePedido(totalValores(produtos)));
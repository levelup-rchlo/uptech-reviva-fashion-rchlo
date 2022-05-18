const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
// -----------------------------------------------
// Pegando a quantidade de itens pelo nome
const verificaQtsUnidadesCompradas = (arrayProduto, nomeProduto) => arrayProduto
    .filter((item) => item == nomeProduto)
    .reduce((acc) => acc += 1, 0);
// -----------------------------------------------
// Pegando o array com um elemento de cada
const produtoOuPrecoUnitario = (arrayParaAnalise) => {
    const umValorDeCada = [];
    arrayParaAnalise.filter((valor) => !umValorDeCada.includes(valor) ? umValorDeCada.push(valor) : valor);
    return umValorDeCada;
}
const arrayQuantidadeUnitaria = produtoOuPrecoUnitario(produtos);
// -----------------------------------------------
const relatorioCompra = (arrayProduto, arrayPrecos, valoresUnitarios) => valoresUnitarios.map((produto, indice) => {
    const qtd = verificaQtsUnidadesCompradas(arrayProduto, produto)
    const valorTratado = produtoOuPrecoUnitario(arrayPrecos)[indice].toLocaleString("pt-br", { currency: "BRL", style: "currency" })
    return (`${qtd}x - ${produto} - ${valorTratado} `);
})

console.log(relatorioCompra(produtos, precos, arrayQuantidadeUnitaria));
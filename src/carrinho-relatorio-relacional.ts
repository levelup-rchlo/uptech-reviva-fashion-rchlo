const listaProdutos: string[] = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const listaPrecoProdutos: number[] = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const verificaQtsUnidadesCompradas = (arrayProduto: string[], nomeProduto: string) : number => arrayProduto
    .filter((nomeLista: string) => nomeLista == nomeProduto)
    .reduce((acc: number) => acc += 1, 0);

const produtoOuPrecoUnitario = <t>(arrayParaAnalise: t[]): t[] => {
    const umValorDeCada: t[] = [];
    arrayParaAnalise.filter((valor: t) => !umValorDeCada.includes(valor) ? umValorDeCada.push(valor) : valor);
    return umValorDeCada;
}
const arrayQuantidadeUnitaria : string[] = produtoOuPrecoUnitario(listaProdutos);

const relatorioCompra = (arrayProduto: string[], arrayPrecos: number[], valoresUnitarios: string[]): string[] => valoresUnitarios.map((produto: string, indice: number) => {
    const qtd : number = verificaQtsUnidadesCompradas(arrayProduto, produto);
    const valorTratado: string = produtoOuPrecoUnitario(arrayPrecos)[indice].toLocaleString("pt-br", { currency: "BRL", style: "currency" });
    return (`${qtd}x - ${produto} - ${valorTratado} `);
})

console.log(relatorioCompra(listaProdutos, listaPrecoProdutos, arrayQuantidadeUnitaria));
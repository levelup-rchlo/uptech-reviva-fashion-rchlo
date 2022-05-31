const carrinho: number[] = [39.90, 75.99, 24, 12, 109.99, 83.99];

const valorLimiteTaxa : number = 70.00;
const porcentagemTaxa : number = 7;

const calcularPorcentagem = (valor: number): number => valor * porcentagemTaxa / 100;

const calculaTotalCarrinho = (listaDeValores : number[]) : number => listaDeValores
    .map((valorCarrinho : number) => valorCarrinho >= valorLimiteTaxa ? calcularPorcentagem(valorCarrinho) + valorCarrinho : valorCarrinho)
    .reduce((total : number, valor : number) => total += valor);

console.log(calculaTotalCarrinho(carrinho));




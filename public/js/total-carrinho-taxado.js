const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

const valorLimiteTaxa = 70.00;
const calcularPorcentagem = valor => valor * 7 / 100;

const total  = carrinho.map((valor) => valor >= valorLimiteTaxa ? calcularPorcentagem(valor) + valor: valor)
    .reduce((acc, valor) => acc += valor)
    
console.log(total);



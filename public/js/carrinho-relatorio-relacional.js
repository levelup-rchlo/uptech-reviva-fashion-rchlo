const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]

const unidadesCompradas = function (arrayRelacionado ,nomeProduto) {
    return precos.reduce((accm, _, indiceCamisetas) => {
        if (arrayRelacionado[indiceCamisetas] == nomeProduto) {
            accm++
        }
        return accm
    }, 0)
}

const produtoOuPrecoUnitario = function (valorParaAnalise){
    let umValorDeCada = [];
    valorParaAnalise.map((valor) => {
        if (!umValorDeCada.includes(valor)) {
            umValorDeCada.push(valor)
        }
    })
    return umValorDeCada;
}

const relatorioCompra = produtoOuPrecoUnitario(produtos).map((valor, indice) => {
    let qtd = 0;
    qtd += unidadesCompradas(produtos,valor)
    let valorTratado = produtoOuPrecoUnitario(precos)[indice].toLocaleString("pt-br",{ currency: "BRL", style: "currency"})
    return (`${qtd}x - ${valor} - ${valorTratado} `);
})

console.log(relatorioCompra);
function adicionaAoEstoque(estoque: (string | number)[][], produto: (string | number)[]) {
    let naoTemNoEstoque;
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i][0] == produto[0]) {
            estoque[i][1] = Number(estoque[i][1]) + Number(produto[1]);
            naoTemNoEstoque = false;
        }
    }
    if (naoTemNoEstoque == true) {
        estoque.push(produto);
    }
    return estoque;
}

function darBaixaEmProduto(estoque: (string | number)[][], produto: (string | number)[]) {
    let temNoEstoque = false
    for (let i = 0; i < estoque.length; i++) {
        if ((estoque[i][0] == produto[0]) && (produto[1] <= estoque[i][1])) {
            estoque[i][1] = Number(estoque[i][1]) - Number(produto[1]);
            temNoEstoque = true
        }
    }
    if (temNoEstoque == false) {
        console.log("Item indisponível")
    }
    return estoque
}

const estoque = [
    ['Camiseta Masculina', 5, 29.90],
    ['Calça Feminina', 8, 108.90]
]

console.log(estoque)

let produto = ['Camiseta Masculina', 1, 29.90]

let estoqueAtualizado = adicionaAoEstoque(estoque, produto)
console.log(estoqueAtualizado)

produto = ['Capa do Batman', 3, 159.99]

estoqueAtualizado = adicionaAoEstoque(estoque, produto)
console.log(estoqueAtualizado)

produto = ['Capa do Batman', 1, 159.99]

estoqueAtualizado = darBaixaEmProduto(estoque, produto)
console.log(estoqueAtualizado)

produto = ['Calça Feminina', 3, 108.90]

estoqueAtualizado = darBaixaEmProduto(estoque, produto)
console.log(estoqueAtualizado)

produto = ['Batrang', 2, 299.99]

estoqueAtualizado = darBaixaEmProduto(estoque, produto)
console.log(estoqueAtualizado)
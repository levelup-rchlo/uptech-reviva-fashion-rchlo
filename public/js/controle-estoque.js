const estoque = [
    ['Camiseta Masculina', 5, 29.90],
    ['Calça Feminina', 8, 108.90]
]

function adicionaAoEstoque(estoque, produto) {
    let naoTemNoEstoque = true

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i][0] == produto[0]) {
            estoque[i][1] = estoque[i][1] + produto[1]
            naoTemNoEstoque = false
        }
    }

    if (naoTemNoEstoque == true) {
        estoque.push(produto)
    }

    return estoque
}

console.log(estoque)

let produto = ['Camiseta Masculina', 1, 29.90]

let estoqueAtualizado = adicionaAoEstoque(estoque, produto)

console.log(estoqueAtualizado)

produto = ['Capa do Batman', 3, 159.99]

estoqueAtualizado = adicionaAoEstoque(estoque, produto)

console.log(estoqueAtualizado)
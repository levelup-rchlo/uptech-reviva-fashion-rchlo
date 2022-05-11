const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

//let total_da_Compra = 0

function total_da_Compra(valor_Compra) {
    const valor_Compra = carrinho.reduce((acum, atual) => atual + acum, 0)
}
console.log(valor_Compra)

//const total_da_Compra = carrinho.reduce((acum,atual) => atual + acum,0)

//carrinho.forEach(function(valor_Compra){
//    total_da_Compra += valor_Compra
//    return total_da_Compra
//})


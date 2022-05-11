const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

let taxados = carrinho.filter((_, indice) => carrinho[indice] > 75)

console.log(`taxados: ${taxados}`)

let total_taxados = taxados.map(function(taxados){
    return (taxados * 0.7) + taxados;
})

console.log(`taxados: ${total_taxados}`)
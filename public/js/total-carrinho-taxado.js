const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

let taxados = carrinho.filter((_, indice) => carrinho[indice] > 75)

console.log(`Valores dos produtos que serao taxados: ${taxados}`)

let total_taxados = taxados.map(function(taxados){
    return (taxados * 0.07) + taxados;
})

console.log(`Valores dos produtos já taxados: ${total_taxados}`)



const total_produtos_taxados = total_taxados.reduce((acum, atual) => atual + acum, 0)

const sem_taxa = carrinho.filter((_, indice) => carrinho[indice] < 75)

const total_produtos_sem_taxa = sem_taxa.reduce((acum, atual) => atual + acum, 0)

const tota_compra_taxada = total_produtos_taxados + total_produtos_sem_taxa

console.log(`Total da compra: ${tota_compra_taxada }`)
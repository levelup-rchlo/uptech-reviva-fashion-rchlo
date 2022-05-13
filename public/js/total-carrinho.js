const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

 const valor_Compra = carrinho.reduce((acum, atual) => atual + acum, 0)
    
console.log(`Total da compra: ${valor_Compra}`)

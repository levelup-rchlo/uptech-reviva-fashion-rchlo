const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

console.log(39.90 + 75.99 + 24 + 12 + 109.99 + 83.99)

let total = 0
let x = 0

while (x < carrinho.length) {
    total = carrinho[x] + total
    x++
}

console.log(total)

total = 0

carrinho.forEach(value => {
    total += value
})

console.log(total)

total = 0

console.log(carrinho.reduce((total, current) => total + current))
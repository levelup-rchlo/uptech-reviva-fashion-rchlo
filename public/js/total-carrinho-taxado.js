const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

console.log(39.90 + 75.99 + 24 + 12 + 109.99 + 83.99)
console.log(39.90 + (75.99 + (0.07 * 75.99)) + 24 + 12 + (109.99 + (0.07 * 109.9)) + (83.99 + (0.07 * 83.99)))

let total = 0


for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i] >= 70) {
        carrinho[i] = carrinho[i] + (0.07 * carrinho[i])
    }
    total = carrinho[i] + total
}

console.log(total)

const carrinho2 = [39.90, 75.99, 24, 12, 109.99, 83.99]

let x = 0

carrinho2.forEach(value => {
    if (value >= 70) {
        value += 0.07 * value
    }
    x += value
})

console.log(x)
const carrinho = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00]
]

let total = 0
let taxas = 0

for (let j = 0; j < carrinho.length; j++) {
    for (let i = 0; i < carrinho[j][1]; i++) {
        if (carrinho[j][1] > 1) {
            taxas -= 0.05 * carrinho[j][2]
        }

        if (carrinho[j][0] == 'Calça Jeans Masculina' || carrinho[j][0] == 'Calça Jeans Feminina') {
            taxas += 0.015 * carrinho[j][2]
        }

        total += carrinho[j][2]
    }
}

total += taxas

if (total > 500) {
    total = total - 50
}

//console.log((105.9614 * 3) + (18.905 * 2) + 25 + 35 + 152.25 - 50)
console.log(total)
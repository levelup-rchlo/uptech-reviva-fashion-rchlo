const carrinhoTaxado = [39.90, 75.99, 24, 12, 109.99, 83.99]

let totalTaxado = 0


for (let i = 0; i < carrinhoTaxado.length; i++) {
    if (carrinhoTaxado[i] >= 70) {
        carrinhoTaxado[i] = carrinhoTaxado[i] + (0.07 * carrinhoTaxado[i])
    }
    totalTaxado = carrinhoTaxado[i] + totalTaxado
}

console.log(totalTaxado)

const carrinhoTaxado2 = [39.90, 75.99, 24, 12, 109.99, 83.99]

let xTaxado = 0

carrinhoTaxado2.forEach(value => {
    if (value >= 70) {
        value += 0.07 * value
    }
    xTaxado += value
})

console.log(xTaxado)
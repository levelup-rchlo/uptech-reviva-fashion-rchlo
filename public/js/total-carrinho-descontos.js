const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99]

//console.log(25.99 + 27.83 + 35.80 + 35.80 + 35.80 + 44 + 53.90 + 25.99)
//console.log(25.99 + 27.83 + 35.80 + (35.80 - (0.1 * 38.80)) + 35.80 + 44 + 53.90 + (25.99 - (0.1 * 25.99)))

const carrinhoRepetidos = []
const carrinhoExtras = []

var semRepetidos = carrinho.filter(function(current, index) {
    if (!(carrinho.indexOf(current) === index)) {
        if (carrinhoRepetidos.indexOf(current) === -1) {
            carrinhoRepetidos.push(current)
        } else {
            carrinhoExtras.push(current)
        }
    }
    return carrinho.indexOf(current) === index;
});


for (let i = 0; i < carrinhoRepetidos.length; i++) {
    carrinhoRepetidos[i] -= 0.1 * carrinhoRepetidos[i]
}

const arrayPrincipal = semRepetidos.concat(carrinhoExtras.concat(carrinhoRepetidos))

total = 0

arrayPrincipal.forEach(value => {
    total += value
})

console.log(total)

//console.log(arrayPrincipal);
//console.log(carrinhoRepetidos);
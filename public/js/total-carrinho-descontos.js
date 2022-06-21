"use strict";
const carrinhoTaxadoDesconto = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];
//console.log(25.99 + 27.83 + 35.80 + 35.80 + 35.80 + 44 + 53.90 + 25.99)
//console.log(25.99 + 27.83 + 35.80 + (35.80 - (0.1 * 38.80)) + 35.80 + 44 + 53.90 + (25.99 - (0.1 * 25.99)))
const carrinhoRepetidos = [];
const carrinhoExtras = [];
var semRepetidos = carrinhoTaxadoDesconto.filter(function (current, index) {
    if (!(carrinhoTaxadoDesconto.indexOf(current) === index)) {
        if (carrinhoRepetidos.indexOf(current) === -1) {
            carrinhoRepetidos.push(current);
        }
        else {
            carrinhoExtras.push(current);
        }
    }
    return carrinhoTaxadoDesconto.indexOf(current) === index;
});
for (let i = 0; i < carrinhoRepetidos.length; i++) {
    carrinhoRepetidos[i] -= 0.1 * carrinhoRepetidos[i];
}
const arrayPrincipal = semRepetidos.concat(carrinhoExtras, carrinhoRepetidos);
let totalTaxadoDescontos = 0;
arrayPrincipal.forEach(value => {
    totalTaxadoDescontos += value;
});
console.log(totalTaxadoDescontos);
//console.log(arrayPrincipal);
//console.log(carrinhoRepetidos);

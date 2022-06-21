"use strict";
const carrinhoMatriz = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00]
];
let totalMatriz = 0;
let taxas = 0;
for (let j = 0; j < carrinhoMatriz.length; j++) {
    for (let i = 0; i < carrinhoMatriz[j][1]; i++) {
        if (carrinhoMatriz[j][1] > 1) {
            taxas -= 0.05 * Number(carrinhoMatriz[j][2]);
        }
        if (carrinhoMatriz[j][0] == 'Calça Jeans Masculina' || carrinhoMatriz[j][0] == 'Calça Jeans Feminina') {
            taxas += 0.015 * Number(carrinhoMatriz[j][2]);
        }
        totalMatriz += Number(carrinhoMatriz[j][2]);
    }
}
totalMatriz += taxas;
if (totalMatriz > 500) {
    totalMatriz = totalMatriz - 50;
}
//console.log((105.9614 * 3) + (18.905 * 2) + 25 + 35 + 152.25 - 50)
console.log(totalMatriz);

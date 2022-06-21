"use strict";
const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina',
    'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'
];
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
// Somando 3.99 nas calças e diminuindo 10% nas camisas
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] == 'Calça Jeans Masculina' || produtos[i] == 'Calça Jeans Feminina') {
        precos[produtos.indexOf(produtos[i])] += 3.99;
    }
    if (produtos[i] == 'Camiseta Básica' || produtos[i] == 'Camiseta Polo') {
        precos[i] -= 0.1 * precos[i];
    }
}
//console.log(precos)
let camisas = 0;
let darDesconto = false;
// Diminuindo 5% na segunda camisa
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] == 'Camiseta Básica' || produtos[i] == 'Camiseta Polo') {
        camisas++;
    }
    if (camisas == 1) {
        darDesconto = true;
    }
    if ((produtos[i] == 'Camiseta Básica' || produtos[i] == 'Camiseta Polo') && darDesconto) {
        precos[produtos.indexOf(produtos[i])] -= 0.05 * precos[produtos.indexOf(produtos[i])];
        darDesconto = false;
    }
}
console.log(precos);
const totalDescontoTaxas = precos.reduce((total, current) => total + current);
console.log(totalDescontoTaxas);

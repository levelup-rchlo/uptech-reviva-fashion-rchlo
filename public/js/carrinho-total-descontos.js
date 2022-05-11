const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99]

let total_descontos = carrinho.filter(function(produto1, produto2) {
    return carrinho.indexOf(produto1) != (produto2);
});

console.log(total_descontos)

let calculo_desconto = total_descontos.filter(function(produto1, produto2) {
    return total_descontos.indexOf(produto1) === (produto2);
})

console.log(calculo_desconto)

let calculo_desconto_final = calculo_desconto.map(function(calculo_desconto){
    return calculo_desconto - (calculo_desconto * 0.1);
})
console.log(calculo_desconto_final)
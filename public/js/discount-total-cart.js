const cart = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99] 
const produtosDuplicados = []

const listaParcialSemDuplicados = 
cart.filter((element, index) => {
    if (cart.indexOf(element) === index) {
        return element
    }
    else {
        if(!produtosDuplicados.includes(element)){
            produtosDuplicados.push(element)
        }
    }

})
console.log("Primeira lista parcial " + listaParcialSemDuplicados);

for (let i = 0; i < 1; i++) {
    let elementoListaProdutoDuplicado = produtosDuplicados[i];
    
    for (let k = 0; k < cart.length; k++) {
        const elementoDoCart = cart[k];

        if(elementoDoCart === elementoListaProdutoDuplicado){
            let produtoComDescontoAplicado =  elementoListaProdutoDuplicado*0.9
            cart.splice(cart.indexOf(elementoDoCart),1,produtoComDescontoAplicado);
            elementoListaProdutoDuplicado = produtosDuplicados[i+1]
            
        }
        
    }

}

const totalDoCarrinho = cart.reduce((acc, e) => {
    return acc += e
})


console.log("---------------------------------------------------");
console.log("Carrinho de compras com descontos aplicados" + "[" + cart + "]");
console.log("---------------------------------------------------");
console.log("Total do carrinho " + totalDoCarrinho.toFixed(2));









 


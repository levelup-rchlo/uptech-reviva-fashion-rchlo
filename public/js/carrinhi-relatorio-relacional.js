const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

var contadorCamisetaB = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Camiseta Básica'){
        contadorCamisetaB ++;
    }
}

var produtoDescricao  = [];

const descricao = produtos.map((nomeProduto, indiceAtual) => {
    if(!produtoDescricao.includes(nomeProduto) && produtos.includes(nomeProduto, indiceAtual + 1)){
        produtoDescricao.push(nomeProduto);
        return nomeProduto;
        
    }
    return nomeProduto;
})

produtoDescricao.splice(0,0, 'produtos:');
produtoDescricao.splice(2,0, 'Quantidade:',contadorCamisetaB, 'Valor Unitário:');

const valoresproduto = precos.filter((_, indice) => produtos[indice] === 'Camiseta Básica');

var valorProdutoItem  = [];
const valorProduto = valoresproduto.map((valorItem, indiceAtual) => {
    if(!valorProdutoItem.includes(valorItem) && valoresproduto.includes(valorItem, indiceAtual + 1)){
        valorProdutoItem.push(valorItem);
        return valorItem;
    }
    return valorItem;
})


produtoDescricao.splice(5,0, valorProdutoItem.toString());

console.log(produtoDescricao)

//__________________________________________________________CAMISA POLO____________________________________


var contadorCamisetaP = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Camiseta Polo'){
        contadorCamisetaP ++;
    }
}

var produto2Descricao  = [];

const nomeProduto2Descricao = produtos.filter((_, indice) => produtos[indice] === 'Camiseta Polo');

const descricaoProduto2 = nomeProduto2Descricao.map((nomeProduto2, indiceAtual) => {
    if(!produto2Descricao.includes(nomeProduto2) && nomeProduto2Descricao.includes(nomeProduto2, indiceAtual - 1)){
        produto2Descricao.push(nomeProduto2);
        return nomeProduto2;
        
    }
    return nomeProduto2;
})

produto2Descricao.splice(0,0, 'produtos:');
produto2Descricao.splice(2,0, 'Quantidade:',contadorCamisetaP, 'Valor Unitário:');

const valoresproduto2 = precos.filter((_, indice) => produtos[indice] === 'Camiseta Polo');

produto2Descricao.splice(5,0, valoresproduto2.toString());

console.log(produto2Descricao)

//__________________________________________________________Bermuda Moletom____________________________________

var bermudaM = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Bermuda Moletom'){
        bermudaM ++;
    }
}

var produto3Descricao  = [];

const nomeProduto3Descricao = produtos.filter((_, indice) => produtos[indice] === 'Bermuda Moletom');

const descricaoProduto3 = nomeProduto3Descricao.map((nomeProduto3, indiceAtual) => {
    if(!produto3Descricao.includes(nomeProduto3) && nomeProduto3Descricao.includes(nomeProduto3, indiceAtual - 1)){
        produto3Descricao.push(nomeProduto3);
        return nomeProduto3;
        
    }
    return nomeProduto3;
})

produto3Descricao.splice(0,0, 'produtos:');
produto3Descricao.splice(2,0, 'Quantidade:',bermudaM, 'Valor Unitário:');

const valoresproduto3 = precos.filter((_, indice) => produtos[indice] === 'Bermuda Moletom');

produto3Descricao.splice(5,0, valoresproduto3.toString());

console.log(produto3Descricao)


//__________________________________________________________Calça Jeans Masculina____________________________________

var calcaM = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Calça Jeans Masculina'){
        calcaM ++;
    }
}

var produto4Descricao  = [];

const nomeProduto4Descricao = produtos.filter((_, indice) => produtos[indice] === 'Calça Jeans Masculina');

const descricaoProduto4 = nomeProduto4Descricao.map((nomeProduto4, indiceAtual) => {
    if(!produto4Descricao.includes(nomeProduto4) && nomeProduto4Descricao.includes(nomeProduto4, indiceAtual - 1)){
        produto4Descricao.push(nomeProduto4);
        return nomeProduto4;
        
    }
    return nomeProduto4;
})

produto4Descricao.splice(0,0, 'produtos:');
produto4Descricao.splice(2,0, 'Quantidade:',calcaM, 'Valor Unitário:');

const valoresproduto4 = precos.filter((_, indice) => produtos[indice] === 'Calça Jeans Masculina');

produto4Descricao.splice(5,0, valoresproduto4.toString());

console.log(produto4Descricao)

//__________________________________________________________Calça Jeans Feminina____________________________________

var calcaF = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Calça Jeans Feminina'){
        calcaF ++;
    }
}

var produto5Descricao  = [];

const nomeProduto5Descricao = produtos.filter((_, indice) => produtos[indice] === 'Calça Jeans Feminina');

const descricaoProduto5 = nomeProduto5Descricao.map((nomeProduto5, indiceAtual) => {
    if(!produto5Descricao.includes(nomeProduto5) && nomeProduto5Descricao.includes(nomeProduto5, indiceAtual - 1)){
        produto5Descricao.push(nomeProduto5);
        return nomeProduto5;
        
    }
    return nomeProduto5;
})

produto5Descricao.splice(0,0, 'produtos:');
produto5Descricao.splice(2,0, 'Quantidade:',calcaF, 'Valor Unitário:');

const valoresproduto5 = precos.filter((_, indice) => produtos[indice] === 'Calça Jeans Feminina');

produto5Descricao.splice(5,0, valoresproduto4.toString());

console.log(produto5Descricao)
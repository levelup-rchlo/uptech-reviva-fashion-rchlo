const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina',
    'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom'
];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90, 49.90, 35]

let camisetaBasica = 0
let camisetaPolo = 0
let bermudaMoleton = 0
let calcaJeansMasculina = 0
let calcaJeansFeminina = 0

let precoCamisetaBasica = 0
let precoCamisetaPolo = 0
let precoBermudaMoleton = 0
let precoCalcaJeansMasculina = 0
let precoCalcaJeansFeminina = 0

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] == 'Camiseta Básica') {
        camisetaBasica++
        precoCamisetaBasica = precos[i].toFixed(2)
    }
    if (produtos[i] == 'Camiseta Polo') {
        camisetaPolo++
        precoCamisetaPolo = precos[i].toFixed(2)
    }
    if (produtos[i] == 'Bermuda Moletom') {
        bermudaMoleton++
        precoBermudaMoleton = precos[i].toFixed(2)
    }
    if (produtos[i] == 'Calça Jeans Masculina') {
        calcaJeansMasculina++
        precoCalcaJeansMasculina = precos[i].toFixed(2)
    }
    if (produtos[i] == 'Calça Jeans Feminina') {
        calcaJeansFeminina++
        precoCalcaJeansFeminina = precos[i].toFixed(2)
    }
}

precoCamisetaBasica = "R$ " + (precoCamisetaBasica.toString().replace(".", ","))
precoCamisetaPolo = "R$ " + (precoCamisetaPolo.toString().replace(".", ","))
precoBermudaMoleton = "R$ " + (precoBermudaMoleton.toString().replace(".", ","))
precoCalcaJeansMasculina = "R$ " + (precoCalcaJeansMasculina.toString().replace(".", ","))
precoCalcaJeansFeminina = "R$ " + (precoCalcaJeansFeminina.toString().replace(".", ","))


console.log("Produto: Camiseta Básica, Quantidade:", camisetaBasica, "Valor unitário:", precoCamisetaBasica)
console.log("Produto: Camiseta Polo, Quantidade:", camisetaPolo, "Valor unitário:", precoCamisetaPolo)
console.log("Produto: Bermuda Moleton, Quantidade:", bermudaMoleton, "Valor unitário:", precoBermudaMoleton)
console.log("Produto: Calça Jeans Masculina, Quantidade:", calcaJeansMasculina, "Valor unitário:", precoCalcaJeansMasculina)
console.log("Produto: Calça Jeans Feminina, Quantidade:", calcaJeansFeminina, "Valor unitário:", precoCalcaJeansFeminina)
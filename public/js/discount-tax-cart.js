
const produtos = [
    'Camiseta Básica',
    'Camiseta Polo',
    'Bermuda Moletom',
    'Calça Jeans Masculina',
    'Camiseta Básica',
    'Calça Jeans Feminina',
    'Camiseta Básica'
];
const precos = [
    29.90,
    49.90,
    35,
    89.99,
    29.90,
    109.99,
    29.90
]



function transformaObjeto(element) {
    let obj = { nome: element, valor: precos[produtos.indexOf(element)], id: produtos.indexOf(element) }
    return obj
}


const listaIndexada = produtos.map(element => {


     if (element.includes("Camiseta")) {
         obj = transformaObjeto(element)

    } if (element.includes("Bermuda")) {
        obj = transformaObjeto(element)

    } if (element.includes("Calça")) {
        obj = transformaObjeto(element)

    }

    return obj
}).sort((a, b) => {
    if (a.nome > b.nome) {
        return 1
    }
    if (a.nome < b.nome) {
        return -1
    }
    return 0
})

console.log(listaIndexada);

const teste = listaIndexada.reduce((_, elemento, index) => {
    if (!(index === listaIndexada.length - 1) && index != 0) {
        if (elemento.id === listaIndexada[index + 1].id && elemento.id === listaIndexada[index - 1].id) {
            elemento.valor = elemento.valor - (elemento.valor * 0.05)
            let produtoDescontado = { nome: elemento.nome, valor: elemento.valor, id: elemento.id }
            listaIndexada.splice(index, 1, produtoDescontado)
        }
    }


}, 0)

console.log(listaIndexada);

const totalDeCompras = listaIndexada.reduce((acc, element) =>
    acc + element.valor, 0)

console.log(`O valor total do carrinho com os descontos aplicados é de R$ ${totalDeCompras.toFixed(2).replace("." , ",")}`);


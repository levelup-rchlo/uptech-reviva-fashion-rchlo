export interface Produto {
    nome: string,
    url: string,
    preco: number,
    descricao: string,
    tamanhos_disponiveis: string[],
    quantidade_disponivel: number,
    quantidade_carrinho?: number,
    imagens: ImagemProduto[];
}

interface ImagemProduto {
    url: string,
    descricao: string
}

// não tirei para apresentar o código, após apresentação o código será removido
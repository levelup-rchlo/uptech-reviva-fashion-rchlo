let estoque = [{
        nome: 'Cropped preto AK by Riachuelo',
        id: 'cropped',
        url: 'cropped-preto-ak-by-riachuelo',
        preco: 29.90,
        descricao: 'O Cropped preto AK by Riachuelo tem o charme do preto e básico. Ótimo para looks de verão!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '../src/cropped.png', descricao: 'crooped preto' }
        ],
    },

    {
        nome: 'Regata listrada AK by Riachuelo',
        id: 'regata',
        url: 'regata-listrada-ak-by-riachuelo',
        preco: 39.90,
        descricao: 'Confeccionada em mix de fibras, a Regata listrada AK by Riachuelo vai fazer você se apaixonar! Com design único, a peça apresenta caimento perfeito e tecido super confortável, perfeita para diversas ocasiões, aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '../src/listrada.png', descricao: 'Regata listrada preta e cinza' }
        ],
    },

    {
        nome: 'Calça larga preto AK by Riachuelo',
        id: 'calca',
        url: 'calça-larga-preto-ak-by-riachuelo',
        preco: 99.90,
        descricao: 'A Calça larga preto AK by Riachuelo é a escolha certa para criar looks com muito estilo! Confeccionada em sarja, a calça apresenta modelagem paper bag, a queridinha do momento! Perfeita para ocasiões especiais, encontros com os amigos e com o crush, aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '../src/calca.png', descricao: 'Calça larga preta' }
        ],
    },

    {
        nome: 'Vestido amarelo AK by Riachuelo',
        id: 'vestido',
        url: 'calca-alfaiataria',
        preco: 179.90,
        descricao: 'Blazer Cropped Feminino Manga Longa com Ombreira Linho Bege AK by Riachuelo confeccionado em tecido com linho, a peça conta com modelagem curta e gola tailleur com fechamento por botão. Queridinho do momento, o blazer pode ser usado em várias composições, como em peças com jeans destroyed e tênis casual ou com calça de alfaiataria e salto fino, formando um look super elegante. Inspire-se!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '../src/vestido.png', descricao: 'Vestido amarelo' }
        ],
    }
]

if (localStorage.length === 0) {
    //saveobjects to localStorage
    localStorage.setItem('estoque', JSON.stringify(estoque));
}

//load from localStorage
let novoObjeto = localStorage.getItem('estoque');

//cast from String to object
novoObjeto = JSON.parse(novoObjeto);
console.log(novoObjeto);

const productNames = []

novoObjeto.forEach(elemento => {
    productNames.push(elemento.nome);
});

const imageButtons = document.querySelectorAll(".shopping-cart");

for (let i = 0; i < imageButtons.length; i++) {
    let name = (productNames[i]);
    imageButtons[i].addEventListener("click", function(nomeProduto) { removeEstoque(name) });
}

function removeEstoque(nomeProduto) {
    novoObjeto.forEach(elemento => {
        if (elemento.nome == nomeProduto && elemento.quantidade_disponivel > 0) {
            elemento.quantidade_disponivel--;
            alert("Item adicionado");
        }
    });
    console.log(novoObjeto);
    localStorage.setItem('estoque', JSON.stringify(novoObjeto));
}
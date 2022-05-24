const itensMemoria = JSON.parse(localStorage.getItem("itensSacola"));

function renderizar(){
    itensMemoria.forEach((valor, index, array) => {
        aplicaProdutos(valor.nome, valor.url, valor.preco, valor.descricao, valor.tamanhos_disponiveis, valor.quantidade_disponivel, valor.imagens, valor.quantidade_carrinho);
        renderizarSubtotal(array);
    })
}
renderizar();
function aplicaProdutos(nome, url, preco, descricoes, tamanhos_disponiveis, quantidade_disponivel, imagens, quantidade_carrinho) {

    const produtosCarrinho = document.querySelector("[produtos-carrinho]");

    const carrinhoProduto = document.createElement("section");
    carrinhoProduto.classList.add("carrinho_produto");
    carrinhoProduto.setAttribute("produto-carrinho", "");
    produtosCarrinho.appendChild(carrinhoProduto);

    const produtoImagem = document.createElement("img");
    produtoImagem.classList.add("produto_imagem");
    produtoImagem.setAttribute("src", imagens[0].url.toString())
    produtoImagem.setAttribute("alt", imagens[0].descricao);
    carrinhoProduto.appendChild(produtoImagem);

    const produtoDescricao = document.createElement("div");
    produtoDescricao.classList.add("produto_descricao");
    carrinhoProduto.appendChild(produtoDescricao);
    const descricaoTitulo = document.createElement("h2");
    descricaoTitulo.classList.add("descricao_titulo");
    descricaoTitulo.innerHTML = "Produto";
    produtoDescricao.appendChild(descricaoTitulo);
    const descricao = document.createElement("p");
    descricao.classList.add("descricao");
    descricao.innerHTML = nome;
    produtoDescricao.appendChild(descricao);

    const produtoTamanho = document.createElement("div");
    produtoTamanho.classList.add("produto_tamanho");
    carrinhoProduto.appendChild(produtoTamanho);
    const tamanhoTitulo = document.createElement("h2");
    tamanhoTitulo.classList.add("tamanho_titulo");
    tamanhoTitulo.innerHTML = "Tamanho escolhido";
    produtoTamanho.appendChild(tamanhoTitulo);
    const tamanhosInputP = document.createElement("input")
    tamanhosInputP.classList.add("tamanhos_input")
    tamanhosInputP.setAttribute("type", "radio")
    tamanhosInputP.setAttribute("id", `tamanho-p-1`)
    tamanhosInputP.setAttribute("name", `tamanhos_modelo-1`)
    produtoTamanho.appendChild(tamanhosInputP);
    const tamanhosLabelP = document.createElement("label")
    tamanhosLabelP.classList.add("tamanhos_label")
    tamanhosLabelP.setAttribute("for", `tamanho-p-1`)
    tamanhosLabelP.innerText = "P"
    produtoTamanho.appendChild(tamanhosLabelP);
    const tamanhosInputM = document.createElement("input")
    tamanhosInputM.classList.add("tamanhos_input")
    tamanhosInputM.setAttribute("type", "radio")
    tamanhosInputM.setAttribute("id", `tamanho-m-1`)
    tamanhosInputM.setAttribute("name", `tamanhos_modelo-1`)
    produtoTamanho.appendChild(tamanhosInputM);
    const tamanhosLabelM = document.createElement("label")
    tamanhosLabelM.classList.add("tamanhos_label")
    tamanhosLabelM.setAttribute("for", `tamanho-m-1`)
    tamanhosLabelM.innerText = "M"
    produtoTamanho.appendChild(tamanhosLabelM);
    const tamanhosInputG = document.createElement("input")
    tamanhosInputG.classList.add("tamanhos_input")
    tamanhosInputG.setAttribute("type", "radio")
    tamanhosInputG.setAttribute("id", `tamanho-g-1`)
    tamanhosInputG.setAttribute("name", `tamanhos_modelo-1`)
    produtoTamanho.appendChild(tamanhosInputG);
    const tamanhosLabelG = document.createElement("label")
    tamanhosLabelG.classList.add("tamanhos_label")
    tamanhosLabelG.setAttribute("for", `tamanho-g-1`)
    tamanhosLabelG.innerText = "G"
    produtoTamanho.appendChild(tamanhosLabelG);

    const produtoValor = document.createElement("div");
    produtoValor.classList.add("produto_valor");
    carrinhoProduto.appendChild(produtoValor);
    const valorTitulo = document.createElement("h2");
    valorTitulo.classList.add("valor_titulo");
    valorTitulo.innerHTML = "Valor";
    produtoValor.appendChild(valorTitulo);
    const valor = document.createElement("p");
    valor.classList.add("valor");
    valor.innerHTML = `R$ ${preco.toFixed(2)}`;
    produtoValor.appendChild(valor);

    const produtoQuantidade = document.createElement("div");
    produtoQuantidade.classList.add("produto_quantidade");
    carrinhoProduto.appendChild(produtoQuantidade);
    const quantidadeTitulo = document.createElement("h2");
    quantidadeTitulo.classList.add("quantidade_titulo");
    quantidadeTitulo.innerHTML = "Quantidade";
    produtoQuantidade.appendChild(quantidadeTitulo);
    const quantidade = document.createElement("input");
    quantidade.classList.add("quantidade");
    quantidade.setAttribute("type", "number");
    quantidade.setAttribute("value", `${quantidade_carrinho}`);
    quantidade.setAttribute("min", "1");
    produtoQuantidade.appendChild(quantidade);

    const produtoSubtotal = document.createElement("div");
    produtoSubtotal.classList.add("produto_subtotal");
    carrinhoProduto.appendChild(produtoSubtotal);
    const subtotalTitulo = document.createElement("h2");
    subtotalTitulo.classList.add("subtotal_titulo");
    subtotalTitulo.innerHTML = "Subtotal";
    produtoSubtotal.appendChild(subtotalTitulo);
    const subtotal = document.createElement("p");
    subtotal.classList.add("subtotal");
    subtotal.innerHTML = `R$ ${(preco * quantidade_carrinho).toFixed(2)}`;
    produtoSubtotal.appendChild(subtotal);
}


function renderizarSubtotal(arrayTotal) {
    const produtosCarrinho = document.querySelector("[produtos-carrinho]");
    const total = calculaSubtotal(arrayTotal);
    const carrinhoCheckout = document.createElement("div");
    carrinhoCheckout.classList.add("carrinho_checkout");
    produtosCarrinho.appendChild(carrinhoCheckout);

    const checkoutTotal = document.createElement("p");
    checkoutTotal.classList.add("checkout_total");
    checkoutTotal.innerHTML = `Total R$ ${total.toFixed(2)}`;
    carrinhoCheckout.appendChild(checkoutTotal);

    arrayTotal.forEach((valor) => {
        const checkoutValores = document.createElement("p");
        checkoutValores.classList.add("checkout_valores");
        checkoutValores.innerHTML = `${valor.quantidade_carrinho} x ${valor.preco.toFixed(2)} = ${(valor.quantidade_carrinho * valor.preco).toFixed(2)}`;
        carrinhoCheckout.appendChild(checkoutValores);
    })

    const checkoutBotao = document.createElement("a");
    checkoutBotao.classList.add("checkout_botao");
    checkoutBotao.setAttribute("href", "#");
    checkoutBotao.innerHTML = "Ir para pagamento";
    carrinhoCheckout.appendChild(checkoutBotao);
}

function calculaSubtotal(array) {
    let subtotal = 0;
    array.forEach(function (item) {
        subtotal += item.quantidade_carrinho * item.preco;
    });
    return subtotal;
}

function alterarQuantidade(){
    const listaInputs = document.querySelectorAll(".quantidade");
    listaInputs.forEach((input, index) =>{
        input.addEventListener("change", function(){
            console.log(index);
            itensMemoria[index].quantidade_carrinho = Number(input.value);
            localStorage.setItem('itensSacola', JSON.stringify(itensMemoria));
            renderizarSubtotal(itensMemoria);
        })
    })
}

alterarQuantidade()
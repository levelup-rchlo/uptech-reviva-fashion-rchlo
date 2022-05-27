const itensMemoria = JSON.parse(localStorage.getItem("itens"));
const containerProdutos = document.querySelectorAll(".lista-itens");

function renderizarProdutos(itemDestino){
    for (let i = 0; i < 4; i++) {
        const listaProdutos = document.createElement("div");
        listaProdutos.classList.add("produto");
        listaProdutos.setAttribute("id", "produtos-dinamicos")
        itemDestino.appendChild(listaProdutos)
    }
}
containerProdutos.forEach(item => renderizarProdutos(item))

const produtos = document.querySelectorAll("#produtos-dinamicos")
itensMemoria.forEach((valor, index) => {
    if (valor.quantidade_disponivel > 0) {
        aplicaProdutos(produtos[index], valor.nome, valor.url, valor.preco, valor.descricao, valor.tamanhos_disponiveis, valor.quantidade_disponivel, valor.imagens, index);
    }
});

function aplicaProdutos(local, nome, url, preco, descricao, tamanhos_disponiveis, quantidade_disponivel, imagens, index) {

    const produto = local;
    const produtoLinkImagem = document.createElement("a")
    produtoLinkImagem.classList.add("produto_link-imagem")
    produtoLinkImagem.setAttribute("href", "detalhes.html")
    produto.appendChild(produtoLinkImagem);

    const produtoImagem1 = document.createElement("img")
    produtoImagem1.classList.add("produto_imagem")
    produtoImagem1.setAttribute("src", imagens[0].url.toString())
    produtoImagem1.setAttribute("alt", imagens[0].descricao)
    produtoLinkImagem.appendChild(produtoImagem1);
    const produtoImagem2 = document.createElement("img")
    produtoImagem2.classList.add("produto_imagem")
    produtoImagem2.setAttribute("src", imagens[1].url.toString())
    produtoImagem2.setAttribute("alt", "")
    produtoLinkImagem.appendChild(produtoImagem2);
    const produtoImagem3 = document.createElement("img")
    produtoImagem3.classList.add("produto_imagem")
    produtoImagem3.setAttribute("src", imagens[2].url.toString())
    produtoImagem3.setAttribute("alt", "")
    produtoLinkImagem.appendChild(produtoImagem3);

    const produtoTamanhos = document.createElement("div")
    produtoTamanhos.classList.add("produto_tamanhos")
    produto.appendChild(produtoTamanhos);
    const tamanhosInputP = document.createElement("input")
    tamanhosInputP.classList.add("tamanhos_input")
    tamanhosInputP.setAttribute("type", "radio")
    tamanhosInputP.setAttribute("id", `tamanho-p-${index}`)
    tamanhosInputP.setAttribute("name", `tamanhos_modelo-${index}`)
    produtoTamanhos.appendChild(tamanhosInputP);
    const tamanhosLabelP = document.createElement("label")
    tamanhosLabelP.classList.add("tamanhos_label")
    tamanhosLabelP.setAttribute("for", `tamanho-p-${index}`)
    tamanhosLabelP.innerText = "P"
    produtoTamanhos.appendChild(tamanhosLabelP);
    const tamanhosInputM = document.createElement("input")
    tamanhosInputM.classList.add("tamanhos_input")
    tamanhosInputM.setAttribute("type", "radio")
    tamanhosInputM.setAttribute("id", `tamanho-m-${index}`)
    tamanhosInputM.setAttribute("name", `tamanhos_modelo-${index}`)
    produtoTamanhos.appendChild(tamanhosInputM);
    const tamanhosLabelM = document.createElement("label")
    tamanhosLabelM.classList.add("tamanhos_label")
    tamanhosLabelM.setAttribute("for", `tamanho-m-${index}`)
    tamanhosLabelM.innerText = "M"
    produtoTamanhos.appendChild(tamanhosLabelM);
    const tamanhosInputG = document.createElement("input")
    tamanhosInputG.classList.add("tamanhos_input")
    tamanhosInputG.setAttribute("type", "radio")
    tamanhosInputG.setAttribute("id", `tamanho-g-${index}`)
    tamanhosInputG.setAttribute("name", `tamanhos_modelo-${index}`)
    produtoTamanhos.appendChild(tamanhosInputG);
    const tamanhosLabelG = document.createElement("label")
    tamanhosLabelG.classList.add("tamanhos_label")
    tamanhosLabelG.setAttribute("for", `tamanho-g-${index}`)
    tamanhosLabelG.innerText = "G"
    produtoTamanhos.appendChild(tamanhosLabelG);

    const produtosEspecificacoes = document.createElement("a")
    produtosEspecificacoes.classList.add("produtos_especificacoes")
    produtosEspecificacoes.setAttribute("href", "#")
    produto.appendChild(produtosEspecificacoes);
    const especificacoesNome = document.createElement("h4")
    especificacoesNome.classList.add("especificacoes_nome")
    especificacoesNome.innerText = nome
    produtosEspecificacoes.appendChild(especificacoesNome);
    const especificacoesValor = document.createElement("p")
    especificacoesValor.classList.add("especificacoes_valor")
    especificacoesValor.innerText = `R$ ${preco.toFixed(2)}`
    produtosEspecificacoes.appendChild(especificacoesValor);

    const produtoBotaoSacola = document.createElement("div")
    produtoBotaoSacola.classList.add("produto_botao-sacola")
    produto.appendChild(produtoBotaoSacola);
    const botaoSacolaConteudo = document.createElement("div")
    botaoSacolaConteudo.classList.add("botao-sacola_conteudo")
    produtoBotaoSacola.appendChild(botaoSacolaConteudo);
    const conteudoFrenteBotao = document.createElement("div")
    conteudoFrenteBotao.classList.add("conteudo_frente-botao")
    botaoSacolaConteudo.appendChild(conteudoFrenteBotao);
    const botaoSacola = document.createElement("button")
    botaoSacola.classList.add("botao-sacola")
    botaoSacola.innerText = "POR NA SACOLA"
    conteudoFrenteBotao.appendChild(botaoSacola);
    const conteudoCostasBotao = document.createElement("button")
    conteudoCostasBotao.classList.add("conteudo_costas-botao")
    botaoSacolaConteudo.appendChild(conteudoCostasBotao);
}

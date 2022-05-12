const botaoMenuNavegacao = document.querySelector(".menu-navegacao_botao");
const painelMenuNavegacao = document.querySelector(".menu-navegacao_items");

botaoMenuNavegacao.addEventListener("click" , ()=>{
    painelMenuNavegacao.classList.toggle("menu-navegacao--ativo")
})

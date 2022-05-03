const botao = document.querySelector(".menu-navegacao_botao");
const painel = document.querySelector(".menu-navegacao_items");

botao.addEventListener("click" , ()=>{
    painel.classList.toggle("menu-navegacao--ativo")
})
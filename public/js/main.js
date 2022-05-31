"use strict";
const botaoMenuNavegacao = document.querySelector(".menu-navegacao_botao");
const painelMenuNavegacao = document.querySelector(".menu-navegacao_items");
function exibeMenu() {
    botaoMenuNavegacao.addEventListener("click", () => {
        painelMenuNavegacao.classList.toggle("menu-navegacao--ativo");
    });
}
exibeMenu();

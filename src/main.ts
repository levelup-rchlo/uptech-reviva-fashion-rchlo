const botaoMenuNavegacao  = <HTMLElement>document.querySelector(".menu-navegacao_botao");
const painelMenuNavegacao = <HTMLElement>document.querySelector(".menu-navegacao_items");

function exibeMenu() : void {
    botaoMenuNavegacao.addEventListener("click" , ()=>{
        painelMenuNavegacao.classList.toggle("menu-navegacao--ativo");
    })
}

exibeMenu();

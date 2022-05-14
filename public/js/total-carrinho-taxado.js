const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];


const valorLimiteTaxa = 75.00;
const porcentagem = 7;
let total = 0;

for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i] >= valorLimiteTaxa) {
        let taxa = 0;
        taxa += carrinho[i] * porcentagem / 100;
        total += carrinho[i] + taxa;
    }else{
        total += carrinho[i];
    }  
}


console.log(total);
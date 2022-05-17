const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];

const carrinhoProcessado = [];

const carrinhoNovo = carrinho.map((valorAtual) => {
  	const incidencia = carrinhoProcessado.filter((elemento) => {
    	if (elemento === valorAtual) {
      	return elemento
    	}
  	})
  	console.log({
  		incidencia
  	})
  	carrinhoProcessado.push(valorAtual)
  	if (incidencia.length === 1) {
  		valorAtual = valorAtual * .9;
  	} 
  	console.log(valorAtual)
  	return valorAtual;
	})
	const total = carrinhoNovo.reduce((acc, cur) => {
  	return acc + cur;
  },0)

console.log({
	carrinhoProcessado, carrinhoNovo, total
})
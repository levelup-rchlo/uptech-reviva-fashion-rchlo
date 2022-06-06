function totalCalculator(qntd, undValue) {
    const strUndValue = undValue.split(" ")[1].replace(",", ".");

    const undValuePart = parseFloat(strUndValue);
    const qntdNumber = Number(qntd);

    let result = "R$" + (qntdNumber * undValuePart).toFixed(2);

    result = result.replace(".", ",");

    document.querySelector('#total').innerHTML = result;
}
function converterParaCelsius() {
    
    var temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

    var temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

    return temperaturaCelsius;
}


function exibirResultado() {
    var resultado = converterParaCelsius();
    alert("A temperatura em Celsius é: " + resultado.toFixed(2));
}
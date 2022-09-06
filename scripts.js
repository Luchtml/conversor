function Converter() {
    var valorElemento = document.getElementById("idistancia");
    var valor = valorElemento.value;
    var valorEmLuzNumerico = parseInt(valor);
    var valorEmLuz = valorEmLuzNumerico * 9.4608;
    console.log(valorEmLuz);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "A distância em Km é " + valorEmLuz + "Km";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
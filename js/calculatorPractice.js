
//Obtener el evento click. Se crea una variable y se llama con el "get element" al elemento que queremos que ejecute el evento


//se declara la función. (quitamos los parámetros) 

var operaciones = function (e) {

var numero1 = parseFloat(document.getElementById("numero1").value); // al poner el .value obtengo el valor del elemento. funcion Parsefloat para que lo identifique como un número
var numero2 = parseFloat(document.getElementById("numero2").value);
var result = document.getElementById("resultado");

var operacion = e.target.id;

    if (operacion == "suma") {
        var resultado = numero1 + numero2;
    }
    else if (operacion == "resta") {
        var resultado = numero1 - numero2;
    }
    else if (operacion == "multiplica") {
        var resultado = numero1 * numero2;
    }
    else if (operacion == "divide") {
        var resultado = numero1 / numero2;
    }

    result.innerHTML = resultado;
}

//Se aplica el evento a la variable (boton en este caso). Tiene dos valores, el evento y la funcion que quiero que se ejecute
var botones = document.getElementById("btns"); // es el id del padre
botones.addEventListener("click", operaciones);
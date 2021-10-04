
//Obtener el evento click. Se crea una variable y se llama con el "get element" al elemento que queremos que ejecute el evento


//se declara la función. (quitamos los parámetros) 

var operaciones = function () {

var numero1 = parsefloat(document.getElementById("numero1").value); // al poner el .value obtengo el valor del elemento. funcion Parsefloat para que lo identifique como un número
var numero2 = parsefloat(document.getElementById("numero2").value);
var result = document.getElementById("resultado");

var resultadoFinal =numero1 + numero2;
result.innerHTML = resultadoFinal; 
}

//Se aplica el evento a la variable (boton en este caso). Tiene dos valores, el evento y la funcion que quiero que se ejecute
var boton = document.getElementById("suma");
boton.addEventListener("click", operaciones);
//Valores

//Un string. Es una cadena de texto
"Ruth"

//Valores numericos

12
12.1

//valores booleanos

true
false

//Valores vacios
null
undefined // valor indefinido pero que se va a definir mas adelante

//Variables. almacenan y registran los valores. 
var let //const   // la que más se usa ahora es let y const para las inmutables

var nombre = "Ruth"; //  ; Significa que aquí termina esta declaración
var edad = 35;  // Dato numerico. No llevan comillas.

// "Ruth" es el string. var es la variable, nombre es el nombre de la variable

// Como se declara una variable

var edad; // y ya, así solo está almacenando un nombre, pero está undefined. NO tiene valor. Para inicializarla hay que darle un valor
edad = 23;

//variables complejas o TIPO OBJETO. Se pueden almacenar diferentes propiedades, en este caso son diferentes propiedades de la variable "persona"
// las propiedades de persona son "nombre, apellido y edad", y los valores "Ruth, Moya y 37"

var persona = {
    nombre: "Ruth",
    apellido: "Moya",
    edad: 37
};

//ARRAY. Puede almacenar valores y también objetos(que a su vez contengan valores)

var amigos = ["Victor", "Paula", "Juan", "Raquel"];
var edades = [24, 21, 25, 19];

var amigos = [
    {nombre: "Victor", edad: 24},
    {nombre: "Paula", edad: 21},
    {nombre: "Juan", edad: 25},
    {nombre: "Raquel", edad: 19}
]

//FUNCIONES (DECLARATIVAS, porque empiezan con la palabra Function). Es como una batidora en la que metes ingredientes, activas el proceso de batido y sale un nuevo producto que es el batido. "Return es el batido que va a salir"

function miPrimerFunction() {
    return 23;
}; 
console.log(miPrimerFunction());*/

function sum(a,b) {
    return a + b;
}

function substraction(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function showResult(result) {
    document.getElementById("result").innerText = result;
}

function sumAndShowResult() {
    const result = sum(4, 2);
    showResult(result);
}

function substractionAndShowResult() {
    const result = substraction(4,2);
    showResult(result);
}

function multiplyAndShowResult() {
    const result = multiply(4,2);
    showResult(result);
}

function sum(a,b) { // funcion sobre cual va a ser la operacion
    return a + b;
}

function sumaYMuestra() { // funcion donde se ponen los valores
    const result = sum(10,25); // La variable donde se almacenan los valores
    suma(result); // esta variable almacena el valor de const result
}
function suma(result) { // La funcion para mostrarlo en el navegador y asociarlo a onclick del html con el ID
    document.getElementById("result").innerHTML = result;
}

// FUNCIONES DE TIPO EXPRESION (guardamos la funcion dentro de una variable)

var tipoDos = function () {
    return 12;
}

console.log(tipoDos());

// Template literals

function miNombre(nom) {
    let nombre = `${nom}`;
    return nombre;
}

console.log(miNombre("Ruth"));

// Expresión de funcion

let saludar = function (nombre) {
    console.log(`Hola persona llamada: ${nombre}`)
}
console.log(saludar("Moya"));

// Revisa los operadores en la chuleta

const edad = 23;
edad = edad + 1;

// es lo mismo que 
edad++; // Forma resumida

// si quieres aumentar el número 

edad += 4;

//CONDICIONALES

let edad = 16;

if (edad == 18) {
    console.log("Puedes votar");
} else if(edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}

// LOOPS

var amigos = ["Victor", "Paula", "Juan", "Raquel"];

function saludarAmigos(amigo) {
    console.log(`Hola, ${amigo}`);
}

//Loop for

for(var i = 0; i < amigos.length; i++){
    saludarAmigos(amigos[i]);
}

//Forma más sencilla

for(amigo of amigos) {
    saludarAmigos(amigo);
};

console.log(saludarAmigos);

// METODOS (es una funcion que vive en las propiedades de mis objetos)

var ejemplo1 = "Hola mundo";
console.log(ejemplo1.toLocaleLowerCase());

var secuencia = [1,2,3];
console.log(secuencia);
console.log(secuencia.push(4));
console.log(secuencia);
console.log(secuencia.pop());
console.log(secuencia);

var nuevaLongitud = secuencia.unshift(5);
console.log(secuencia);
var borrarNumero = secuencia.shift(5);
console.log(secuencia);
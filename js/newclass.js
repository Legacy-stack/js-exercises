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

//FUNCIONES


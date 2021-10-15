

var salute = "Hola a todos";
document.getElementById("text").innerHTML = salute;

//Barra de estado. Con title se accede al título de la página en el documento interno

document.title = "Barra de estado"

//Alert

/*function saludar() {
    alert("Hola a todos");
}*/

//Calcular numeros primos

function calPares() {
    let resultado = "";
    for (let i = 1; i < 101; i++) {
        if (i % 2 === 0){
            if (resultado === "") {
                resultado = i;
            }else {
                resultado = resultado + ', ' + i; 
            }
        }
    }
    document.getElementById("text").innerHTML = resultado;
}

//Mouse over

function changeBackgroundColor(position) {
    if (position === 1) {
        document.getElementById("fatherbox").style.backgroundColor = "rgb(41, 217, 223)";
    }else if(position === 2) {
        document.getElementById("fatherbox").style.backgroundColor = "rgb(236, 60, 213)";
    }else{
        document.getElementById("fatherbox").style.backgroundColor = "";
    }


}

function convert() {
    const dolarValue = document.getElementById("dolar").value;
    const result = dolarValue * 0.80;
    document.getElementById("result").innerHTML = result;
}
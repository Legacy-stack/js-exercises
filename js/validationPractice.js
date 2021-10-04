
//variables concatenadas

var formulario = document.getElementById("formulario"),
    boton = document.getElementById("btn");

    function validarDatos(e) {
        var inputNombre = document.formulario.name.value,
            inputApellido = document.formulario.lastname.value,
            inputEmail = document.formulario.email.value;

        if (inputNombre == 0 || inputApellido == 0 || inputEmail == 0) {
            alert("Campos necesarios vacios");
            e.preventDefault(); //evita que realice la accion por defecto para poder yo ponerle lo que quiera (por ejemplo que haga submit aunque no se cumpla la condición)
        }
    }
    
    function validarRB(e) {
        if (document.formulario.sexo[0],checked == true || document.formulario.sexo[1],checked == true) {
        }
        else {  alert("Seleccione un sexo");
                e.preventDefault();
        }
    }

    function validarTerminos(e) {
        if (document.formulario.terms.checked == true) {
        }
        else {  alert("Debe aceptar los terminos");
        e.preventDefault();
        }
    }
    
    //Funcion que ejecuta todo

    function validar(e) {
        validarDatos(e),
        validarRB(e),
        validarTerminos(e);
    }
    
    //eventos del formulario (cuando se haga submit)

    formulario.addEventListener("submit", validar);
    
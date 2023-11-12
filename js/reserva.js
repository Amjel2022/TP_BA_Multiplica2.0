const   $submit = document.getElementById('submit'),
        $nombre = document.getElementById('nombre'),
        $apellido = document.getElementById('apellido'),
        $telefono = document.getElementById('telefono'),
        $email = document.getElementById('email');
    

//Función:
function validateInputs() {
        //Expresión regular para el nombre y apellido (entre 1 y 20 caracteres):
        const nombreRegex = /^[a-zA-Z]{1,50}$/;
        const apellidoRegex = /^[a-zA-Z]{1,50}$/;

        //Expresión regular para el número de teléfono:
        const telefonoRegex = /^[a-zA-Z]{1,50}$/;

        //Expresión regular para email:
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

        //Alertas de los campos
        if ($nombre.value === "") {
            alert("Completar el nombre.");
        }
        if ($apellido.value === "") {
            alert("Completar el apellido.");
        }
        if ($telefono.value === "") {
            alert("Completar el telefono.");
        }
        if ($email.value === "") {
            alert("Completar el email.");
        }

        //Validación de los campos (cambio a color rojo si no es correcto)
        //Validación nombre:
        if(!nombreRegex.test($nombre.value)) {
            alert("Ingrese formato correcto en el nombre.");
            $nombre.style.border = "2px solid red";
        }

        //Validación apellido:
        if(!apellidoRegex.test($apellido.value)) {
            alert("Ingrese formato correcto en el apellido");
            $apellido.style.border = "2px solid red";
        }

        //Validación teléfono:
        if(!telefonoRegex.test($telefono.value)) {
            alert("Ingrese formato correcto en el teléfono");
            $telefono.style.border = "2px solid red";
        }

        //Validación email:
        if(!emailRegex.test($email.value)) {
            alert("Ingrese formato correcto en el email");
            $email.style.border = "2px solid red";
        }
}

//EVENTO: 
document.addEventListener("clcik", (e) => {
    if(e.target === $submit) {
        e.preventDefault();
        validateInputs();
    }
});


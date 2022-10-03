
function comprobarEmail(mail) {
    var seguir = true;
    if (mail == '') {
        alert('El campo Email es obligatorio.');
    } else {
        if (seguir) {
            let i = 0;
            let indiceArroba;
            let contadorArroba = 0;
            debugger;
            while (i < mail.length && esMail(mail[i])) {
                i++;
                if (mail[i] == '@') {
                    indiceArroba = i;
                    contadorArroba++;
                }
            }

            if (i < mail.length) {
                alert("No es una dirección de correo correcta");
                seguir = false;
            }
        //     if (mail.indexof(".", mail.indexof("@"))) {
        //         seguir = false;
        //     }
        // }
        if (seguir) {
            alert('Todo correcto');
        }

    }
}
function comprobarEmails(mail) {
    var seguir = true;

    if (mail == '') {
        alert('El campo Confirmar Email es obligatorio.');
    } else {
        if (document.getElementById("email").value != mail) {
            alert("No coinciden los campos de email");
            seguir = false;
        }
        if (seguir) {
            alert('Todo correcto');
        }
    }
}






function esDireccion(caracter) {
    let ascii = caracter.charCodeAt(i)
    return (ascii > 47 && ascii < 58) || (ascii > 96 && ascii < 123) || (ascii == 46) || (ascii == 95);
}

function comprobarEmail(mail) {
    var seguir = true;

    if (mail == '') {
        alert('El campo Email es obligatorio.');
        seguir = false;
    } else {
        var mail_separado = separarEmail(mail);
        let i = 0;
        while (i < mail_separado[0].length && esDireccion(mail_separado[0][i])) {
            i++;
        }
        if (i < mail_separado[0].length) {
            alert("No es una dirección de correo correcta");
            seguir = false;
        }

        let j = 0;
        while (j < mail_separado[1].length && esMinuscula(mail_separado[1][j])) {
            j++;
        }
        if (j < mail_separado[1].length) {
            alert("No es un dominio de correo correcto 1");
            seguir = false;
        }

        let k = 0;
        while (k < mail_separado[2].length && (esMinuscula(mail_separado[2][k]) || esMayuscula(mail_separado[2][k]) || mail_separado[2][k] == '.')) {
            k++;
        }
        if (k < mail_separado[2].length) {
            alert("No es un dominio de correo correcto 2");
            seguir = false;
        }

        if (seguir) {
            alert('Todo correcto');
        }
    }
    return seguir;
}

function separarEmail(mail) {
    let direccion = "";
    let nombreDom = '';
    let restoDominio = '';
    let array = [];
    let i = 0;
    let indiceArroba = i;
    let j = indiceArroba + 1;
    while (i < mail.length && mail[i] != '@') {
        direccion += mail[i];
        i++;
    }
    array.push(direccion);
    while (j < mail.length && mail[j] != '.') {
        nombreDom += mail[j];
        j++;
    }
    array.push(nombreDom);
    for (let k = j + 1; k < mail.length; k++) {
        restoDominio += mail[k];
    }
    array.push(restoDominio);
    return array;
}

function comprobarEmails(mail) {
    var seguir = true;

    if (mail == '') {
        alert('El campo Confirmar Email es obligatorio.');
        seguir = false;
    } else {
        if (document.getElementById("email").value != mail) {
            alert("No coinciden los campos de email");
            seguir = false;
        }
        if (seguir) {
            alert('Todo correcto');
        }
    }
    return seguir;
}
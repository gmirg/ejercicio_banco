
function separarPalabras(frase1) {
    let palabra = "";
    let array = [];
    for (i = 0; i < frase1.length; i++) {

        if (frase1[i] != " ") {
            palabra = palabra + frase1[i];
        } else if (frase1[i] == " " || i - 1 == (frase1.length - 1)) {
            array.push(palabra);
            palabra = "";
        }
        if (i == frase1.length - 1) {
            array.push(palabra);
        }

    }
    return array
}


const esLetra = (caracter) => {
    let ascii = caracter.charCodeAt(0);
    return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123) || (ascii == 32);
};

/*Todos los nombres deben empezar por mayúsculas y el campo 
no admite números o símbolos, sólo letras. Se trata de un campo obligatorio.*/
function comprobarNombreOapellido(campo) {
    var nombre = campo.value;
    var seguir = true;

    while (nombre[0] == ' ') {
        nombre = nombre.substring(1);
    }

    if (nombre == '') {
        alert('El campo ' + campo.id + ' es obligatorio.');
    } else {

        var nombres = separarPalabras(nombre);
        for (let i = 0; i < nombres.length; i++) {
            console.log(nombres[i][0]);
            console.log(nombres[i][0].toUpperCase());
            console.log(nombres[i][0] !== nombres[i][0].toUpperCase())
            if (nombres[i][0] !== nombres[i][0].toUpperCase()) {
                alert("El nombre tiene que empezar por mayuscula.");
                seguir = false;
            }
        }
        if (seguir) {
            let i = 0;
            while (i < nombre.length && esLetra(nombre[i])) {
                i++;
            }
            if (i < nombre.length) {
                alert("No se pueden poner numeros o simbolos en el nombre.");
                seguir = false;
            }
        }
        if (seguir) {
            alert('Todo correcto');
        }

    }
}
const esMail = (caracter) => {
    let ascii = caracter.charCodeAt(0);
    return (ascii > 47 && ascii < 58) || (ascii > 96 && ascii < 123) || (ascii == 46) || (ascii == 64) || (ascii == 45) ;
};



function comprobar() {
    comprobarNombreOapellido(document.getElementById("nombre"));
    comprobarNombreOapellido(document.getElementById("apellidos"));
}



const esNumero = (caracter) => {
    let ascii = caracter.charCodeAt(0);
    return (ascii > 64 && ascii < 91) || (ascii > 47 && ascii < 58);
};

// 9 numero entre 0 y 9, + letra en mayuscula.

function comprobarDNI() {

    var dni = document.getElementById('dni').value;
    var seguir = true;
    var numDni = parseInt('dni').toUpperCase();

    var codigoLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var calculoLetra = codigoLetra[numDni % 23]

    if (numDni == '') {
        alert('El campo DNI es obligatorio.');
        seguir = false;
    }

    else if (!(numDni >= 0 && numDni <= 99999999)) {
        alert("El número es incorrecto");
        seguir = false;

    } else if (calculoLetra == numDni[numDni.length-1]) { 
            alert("El DNI es correcto");
        } else  {
            alert("la letra no coincide");
        }
    }

comprobarDNI()

function separaLetraDNI(dni) {
    let numero = '';
    let letra = '';
    for(let i = 0; i < dni.length; i++)  {
        if(i == dni.length - 1) {
            letra += dni[i];
        } else {
            numero += dni[i];
        }
    }
    return [parseInt(numero), letra];
}



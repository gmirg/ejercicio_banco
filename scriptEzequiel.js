

function separaLetraDNI(dni) {
    let numero = '';
    let letra = '';
    for (let i = 0; i < dni.length; i++) {
        if (i == dni.length - 1) {
            letra += dni[i];
        } else {
            numero += dni[i];
        }
    }
    return [numero, letra];
}
separaLetraDNI();
console.log(separaLetraDNI());


const esNumero = (caracter) => {
    let ascii = caracter.charCodeAt(i);
    return (ascii > 64 && ascii < 91) || (ascii > 47 && ascii < 58);
};

// 9 numero entre 0 y 9, + letra en mayuscula.

function comprobarDNI() {

    var dni = document.getElementById('dni').value;
    var dni_separado = separaLetraDNI(dni);
    var seguir = true;

    var codigoLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var calculoLetra = codigoLetra[dni % 23];

    if (dni == '') {
        alert('El campo DNI es obligatorio.');
        seguir = false;
    } else if(dni.length != 9){
        alert('El DNI no es correcto.');
        seguir = false;
    } else {
        for(let i = 0; i < dni_separado[0].length; i++) {
            if(!esNumero(dni_separado[0][i])) {
                alert('El DNI no es correcto.');
                seguir = false;
            }
        }

        if(seguir && !esLetra(dni_separado[1])) {
            alert('El DNI no es correcto.');
                seguir = false;
        } else if(seguir && esLetra(dni_separado[1]) && dni_separado[1] != calculoLetra) {
            alert('La letra no coincide');
            seguir = false;
        }

        if(seguir) {
            alert('dni correcto');
        }
    }

}

 
function comprobar() {
    comprobarDNI();
}
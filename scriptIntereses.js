function separarDireccion(frase1) {
    let palabra = "";
    let array = [];
    for (i = 0; i < frase1.length; i++) {

        if (frase1[i] != ",") {
            palabra = palabra + frase1[i];
        } else if (frase1[i] == "," || i - 1 == (frase1.length - 1)) {
            array.push(palabra);
            palabra = "";
        }
        if (i == frase1.length - 1) {
            array.push(palabra);
        }

    }
    return array
}


function comprobarIntereses() {
    var interes = document.getElementById("intereses").value;
    var seguir = true;
    if(interes == '') {
        alert('El campo intereses es obligatorio');
        seguir = false;
    } else {
        var intereses = separarDireccion(interes);
        if (intereses.length > 3) {
            alert('El campo intereses es incorrecto.')
            seguir = false;
        }
    
        for(let i = 0; i < intereses.length; i++) {
            if(intereses[i] != "mercado inmobiliario" && intereses[i] != "bolsa" && intereses[i] != "bienes estatales") {
                
            }
        }
    }

}
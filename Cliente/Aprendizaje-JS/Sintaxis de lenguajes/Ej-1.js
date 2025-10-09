function asteriscos(){
    // Obtener el valor del input
    let input = document.querySelector('.inputEj').value.trim();
    let count = 0;

    // Array completo de vocales incluyendo variantes acentuadas, diéresis y mayúsculas
    let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü', 'A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü'];

    // Contar espacios en blanco para validar longitud de la frase
    for (let letter of input) {
        if (letter === ' ') {
            count += 1
        }
    }

    // Validación: la frase debe tener al menos 4 espacios (5 palabras)
    if(count < 4){
        console.log("Introduzca una frase con al menos 5 palabras")
    } else {
        // Procesar frase: reemplazar vocales por asteriscos
        let nuevoInput = '';
        for(let letter of input){
            if(vocales.includes(letter)){
                nuevoInput += '*'  // Reemplazar vocal por asterisco
            } else {
                nuevoInput += letter  // Mantener carácter original
            }
        }
        console.log("Frase con vocales reemplazadas:", nuevoInput)
    }
}

function guionBajo(){
    // Obtener y limpiar el valor del input
    let input = document.querySelector('.inputEj').value.trim();
    let count = 0;

    // Contar espacios en blanco para validar longitud de la frase
    for (let letter of input) {
        if (letter === ' ') {
            count += 1
        }
    }

    // Validación: la frase debe tener al menos 4 espacios (5 palabras)
    if(count < 4){
        console.log("Introduzca una frase con al menos 5 palabras")
    } else {
        let nuevoInput = '';
        let count = 0;  // Contador de caracteres no-espacio

        // Procesar cada carácter de la frase
        for(let letter of input){
            // Incrementar contador solo si no es espacio
            if(letter !== " "){
                count += 1;
            }

            // Reemplazar cada segundo carácter no-espacio por guión bajo
            if(count % 2 === 0 && letter !== " "){
                nuevoInput += '_'  // Reemplazar segundo carácter por _
            } else {
                nuevoInput += letter  // Mantener carácter original
            }
        }
        console.log("Frase con caracteres reemplazados:", nuevoInput)
    }
}

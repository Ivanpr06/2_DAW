function ordenar(){
    // Obtener palabras DENTRO de la función
    let input = document.querySelector('.inputEj').value.trim();
    let palabras = input.split(" ").filter(palabra => palabra.length > 0);

    // Reiniciar el array
    let listaordenada = [];

    // Filtrar palabras
    palabras.forEach(function(palabra){
        if(palabra.length > 4){
            listaordenada.push(palabra);
        }
    });

    // Ordenar y mostrar
    listaordenada.sort();

    // Crear HTML correctamente
    let html = listaordenada.map(palabra => `<p>${palabra}</p>`).join('');
    document.querySelector('.listaordenada').innerHTML = html;
}

function buscar(){
    // Obtener palabras DENTRO de la función
    let input = document.querySelector('.inputEj').value.trim().toLowerCase();
    let palabras = input.split(" ").filter(palabra => palabra.length > 0);
    let inputbuscar = document.querySelector('.inputbusqueda').value.trim().toLowerCase();

    // Reiniciar el array
    let listaordenada = [];

    if(input.includes(inputbuscar)){
        console.info("Palabra ya añadida")
    }else{
        palabras.push(inputbuscar);

        palabras.forEach(function(palabra){
            if(palabra.length > 4){
                listaordenada.push(palabra);
            }
        });

        // Ordenar y mostrar
        listaordenada.sort();

        // Crear HTML correctamente
        let html = listaordenada.map(palabra => `<p>${palabra}</p>`).join('');
        document.querySelector('.nuevoOrdenado').innerHTML = html;

    }
}
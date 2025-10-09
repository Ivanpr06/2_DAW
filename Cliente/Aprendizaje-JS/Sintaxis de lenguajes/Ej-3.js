// Convertir array a Map
let arrayMap = new Map([
    ['Ivan', 7.64],
    ['Aaron', 6.94],
    ['Ander', 8.74],
    ['Eduardo', 4.18]
]);

// Usar for...of con Map (forma correcta)
let html = '';
for(let [nombre, nota] of arrayMap) {
    html += `<p>Nombre: ${nombre}. Nota: ${nota}</p>`;
}
document.querySelector('.info').innerHTML = html;

// O usando Array.from() con Map
let html2 = Array.from(arrayMap, ([nombre, nota]) =>
    `<p>${nombre}</p> --- <p>${nota}</p>`
).join('');
document.querySelector('.nuevoOrdenado').innerHTML = html2;
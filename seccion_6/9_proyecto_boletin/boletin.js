let notas = [8, 4, 6, 3, 10];

function listarNotas() {
    let lista = document.getElementById("listaNotas");
    for (let i = 0; i < notas.length; i++) {
        let item = document.createElement("li");
        item.textContent = notas[i];
        lista.appendChild(item);
    }
}

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    document.getElementById("promedio").textContent = "Promedio: " + promedio.toFixed(2);
}

function notaMasAlta() {
    let mayor = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > mayor) {
            mayor = notas[i];
        }
    }
    document.getElementById("mayor").textContent = "Nota más alta: " + mayor;
}

function hayAplazados() {
    let aplazo = "No";
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 4) {
            aplazo = "Sí";
            break;
        }
    }
    document.getElementById("aplazo").textContent = "¿Hay aplazados?: " + aplazo;
}

window.onload = listarNotas;

z
function collatz(x) {
    let sequence = [];
    while (x !== 1) {
        let step = {};
        step.number = x;
        if (x % 2 === 0) {
            step.calculation = `${x} es par, entonces ${x} / 2 = ${x / 2}`;
            x = x / 2;
        } else {
            step.calculation = `${x} es impar, entonces ${x} * 3 + 1 = ${3 * x + 1}`;
            x = 3 * x + 1;
        }
        sequence.push(step);
    }
    sequence.push({ number: 1, calculation: "¡Llegamos al ciclo 4 → 2 → 1!" });
    return sequence;
}

function jugarCollatz() {
    const input = document.getElementById("numberInput");
    const output = document.getElementById("output");
    const numero = parseInt(input.value);

    if (isNaN(numero)) {
        output.innerHTML = "¡Eso no es un número! Inténtalo de nuevo.";
        return;
    }

    if (numero <= 0) {
        output.innerHTML = "¡Necesito un número positivo!";
        return;
    }

    const secuencia = collatz(numero);
    let outputText = "";

    secuencia.forEach((paso, index) => {
        outputText += `<div class="paso">
                          <span class="numero">Paso ${index + 1}: ${paso.number}</span>
                          <span class="calculo">${paso.calculation}</span>
                      </div>`;
    });

    output.innerHTML = outputText;
}

// Función para crear la lluvia de símbolos
function crearLluviaDeSimbolos() {
    const matrixRain = document.querySelector('.matrix-rain');
    const numSymbols = 2000; // Ajusta la cantidad de símbolos

    for (let i = 0; i < numSymbols; i++) {
        const symbol = document.createElement('span');
        symbol.classList.add('matrix-symbol');
        symbol.textContent = getRandomSymbol();
        symbol.style.left = `${Math.random() * 1000}%`;
        symbol.style.animationDelay = `${Math.random() * 2}s`;
        matrixRain.appendChild(symbol);
    }
}

// Función para obtener un carácter aleatorio
function getRandomSymbol() {
    const symbols = "これは古きと新しきが融合する剣です古今が交わるその刃旧きを新しきへと変える剣山本武蔵\u3040-\u30ff\u4e00-\u9fff"; // Caracteres japoneses
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Llama a la función para crear la lluvia al cargar la página
window.addEventListener('DOMContentLoaded', crearLluviaDeSimbolos);
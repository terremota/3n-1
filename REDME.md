 Descripción breve de la función de cada parte del código:

Función collatz(x):

Esta función implementa la secuencia de Collatz.
Toma un número entero x como entrada.
Genera una secuencia de números aplicando las reglas de Collatz:
Si x es par, lo divide por 2.
Si x es impar, lo multiplica por 3 y le suma 1.
Almacena cada paso en un objeto que incluye el número y el cálculo realizado.
Devuelve un array de objetos que representan la secuencia completa hasta llegar a 1.
Incluye un último objeto para mostrar el ciclo final 4,2,1.

Función jugarCollatz():

Esta función maneja la interacción del usuario.
Obtiene el número ingresado por el usuario desde un campo de entrada HTML.
Valida que la entrada sea un número entero positivo.
Llama a la función collatz() para obtener la secuencia.
Formatea la secuencia para mostrarla en un elemento de salida HTML, mostrando cada paso con el número y el cálculo.
Muestra un mensaje de error si el valor introducido no es un número, o si este es negativo o igual a cero.


Función crearLluviaDeSimbolos():

Esta función crea un efecto de "lluvia de símbolos" en la página web.
Selecciona un elemento HTML con la clase matrix-rain.
Genera una gran cantidad de elementos span que representan símbolos aleatorios.
Asigna a cada símbolo una posición horizontal aleatoria y un retraso de animación aleatorio.
Añade los símbolos al elemento matrix-rain.


Función getRandomSymbol():

Esta función devuelve un carácter aleatorio de una cadena que contiene caracteres japoneses.
Es utilizada por la función crearLluviaDeSimbolos() para proporcionar los simbolos que caen.
window.addEventListener('DOMContentLoaded', crearLluviaDeSimbolos);:

Este código asegura que la función crearLluviaDeSimbolos() se ejecute después de que el contenido HTML de la página se haya cargado completamente. Esto garantiza que el elemento matrix-rain exista antes de que se intente añadir los símbolos.

---------------------------------------------------------------------------------------------------------------------------------------------

    El problema  3N+1 

Es un problema matemático muy famoso y aún sin resolver. También se conoce como la conjetura de Collatz, el problema de Syracuse,el problema de Kakutani, el algoritmo de Hasse o el problema de Ulam.

Enunciado del problema

El problema es muy simple de plantear:
	1.	Elige cualquier número entero positivo (1, 2, 3, 4, ...).
	2.	Si el número es par, divídelo entre 2.
	3.	Si el número es impar, multiplícalo por 3 y súmale 1.
	4.	Repite los pasos 2 y 3 con el nuevo número que obtengas.

La conjetura de Collatz dice que, sin importar el número inicial que elijas, siempre llegarás al ciclo 4, 2, 1.
Ejemplo


Si empezamos con el número 6:
	•	6 es par, así que lo dividimos entre 2: 6 / 2 = 3
	•	3 es impar, así que lo multiplicamos por 3 y le sumamos 1: (3 * 3) + 1 = 10
	•	10 es par, así que lo dividimos entre 2: 10 / 2 = 5
	•	5 es impar, así que lo multiplicamos por 3 y le sumamos 1: (5 * 3) + 1 = 16
	•	16 es par, así que lo dividimos entre 2: 16 / 2 = 8
	•	8 es par, así que lo dividimos entre 2: 8 / 2 = 4
	•	4 es par, así que lo dividimos entre 2: 4 / 2 = 2
	•	2 es par, así que lo dividimos entre 2: 2 / 2 = 1
Como ves, hemos llegado a 1.

Por qué es un problema sin resolver
A pesar de su sencillez, nadie ha podido demostrar si la conjetura es cierta para todos los números enteros positivos. Se ha comprobado para una gran cantidad de números, pero eso no es suficiente para demostrar que se cumple siempre.

Puntos clave:
	•	Es un problema muy simple de entender, pero muy difícil de resolver.
	•	La conjetura dice que cualquier número entero positivo lleva al ciclo 4, 2, 1.
	•	A pesar de muchos intentos, no se ha encontrado una prueba matemática definitiva.
	•	Es un problema que ha atraído a muchos matemáticos a lo largo de los años.

Espero que esta explicación te sea útil.






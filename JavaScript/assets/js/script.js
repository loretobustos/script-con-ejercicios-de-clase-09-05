console.log("¡Hola!");

var nombre = "Alexander";
let pregunta = "¿Es la variable tipo 'string'?";

console.log(nombre, pregunta);

var a = 15;
var b = 20.6;
var c = 15 / 0;

var d = "cuatro" / 4;

console.log(a, b, c, d);
console.log(a + b);

var auto = {
    modelo: "BMW X3",
    color: "amarillo",
    patente: "XT TH 93"
};
console.log(auto, "ruedas grandes");

let x = 3;
let y = 6;
console.log(x, y);

var colores = ["blanco", "rojo", "negro"];
console.log(colores);

var word = "¡Hola mundo!";
console.log(typeof word);

var numero = 10;
var numeros = 26;
var resultadoSuma = numero + numeros;
var resultadoResta = numero - numeros;
var numeroNuevo = 30;
console.log(resultadoSuma + numeroNuevo);
console.log(x + y, "resultado suma=", resultadoSuma, "resultado resta=", resultadoResta, auto);

var s = 55;
var z = ++s;
console.log(s, z);

var l = 84;
var z = l++;
console.log(l, z);

var name = "";
console.log(typeof name);

let ñ = 10;

if (ñ > 5) {
  console.log("ñ es mayor que 5");
}


let w = 3;

if (w > 5) {
  console.log("w es mayor que 5");
} else {
  console.log("w no es mayor que 5");
}


let xx = 3;

if (xx > 5) {
  console.log("xx es mayor que 5");
} else if (xx === 5) {
  console.log("xx es igual a 5");
} else {
  console.log("xx es menor que 5");
}


// Ejemplo 1: Condición simple con if-else
var edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}


// Ejemplo 2: Condición con operador ternario
var esMayor = (edad >= 18) ? true : false;
console.log("¿Es mayor de edad?", esMayor);


// Ejemplo 3: Uso de true y false en comparaciones
var tienePermiso = true;
var estaRegistrado = false;
if (tienePermiso && !estaRegistrado) {
    console.log("¡Bienvenido! Puedes acceder al sitio.");
} else {
    console.log("Lo siento, no puedes acceder al sitio.");
}


// Ejemplo 4: Evaluación de valores booleanos
var esValido = true;
if (esValido) {
    console.log("El valor es válido.");
} else {
    console.log("El valor no es válido.");
}


// Operador &&
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Operador ||
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// Operador !
console.log(!true);  // false
console.log(!false); // true

// Operador de comparación <
console.log(10 < 20); // true
console.log(20 < 10); // false

// Operador de comparación >
console.log(10 > 20); // false
console.log(20 > 10); // true

// Operador de comparación ==
console.log(10 == 10); // true
console.log(10 == "10"); // true
console.log(10 == 20); // false

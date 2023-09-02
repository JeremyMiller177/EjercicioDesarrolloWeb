// index.js
const calculadora = require('./calculadora');

// Ejemplo de uso de las operaciones
const resultadoSuma = calculadora.suma(5, 3);
const resultadoResta = calculadora.resta(10, 4);
const resultadoMultiplicacion = calculadora.multiplicacion(6, 2);
const resultadoDivision = calculadora.division(8, 2);
const resultadoModulo = calculadora.modulo(9, 4);

console.log(`Resultado de la suma: ${resultadoSuma}`);
console.log(`Resultado de la resta: ${resultadoResta}`);
console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
console.log(`Resultado de la división: ${resultadoDivision}`);
console.log(`Resultado del módulo: ${resultadoModulo}`);

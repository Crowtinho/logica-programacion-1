import { obtenerNumeros,ordenarDeMayorAMenor, ordenarDeMenorAMayor } from "./NumerosOrdenados.js";

// let numeros = [];
let numeros = obtenerNumeros()
console.log(numeros);

// let numerosOrdenados = obtenerNumeros(numeros);
ordenarDeMayorAMenor(numeros);
ordenarDeMenorAMayor(numeros);
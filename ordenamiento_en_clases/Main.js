import { obtenerNumeros,ordenarDeMayorAMenor, ordenarDeMenorAMayor } from "./NumerosOrdenados.js";

// let numeros = [];
let numeros = obtenerNumeros()
// console.log(numeros);

// let numerosOrdenados = obtenerNumeros(numeros);
if (!numeros.every(n => n === numeros[0])) {
    console.log("Numeros ordenados de mayor a menor");
    ordenarDeMayorAMenor(numeros);
    console.log("Nujmeros ordenados de menor a mayor");
    ordenarDeMenorAMayor(numeros);
}else{
    console.log("Los números son iguales!!!");
}




import { ordenarDeMayorAMenor,ordenarDeMenorAMayor } from "./NumerosOrdenados.js";
// let numeros = [];
// let numeros = obtenerNumeros()
document.getElementById("calcular").addEventListener("click", function(){
    let numeros =[
        parseFloat(document.getElementById("numero1").value),
        parseFloat(document.getElementById("numero2").value),
        parseFloat(document.getElementById("numero3").value)
    ] 

    
    if (!numeros.every(n => n === numeros[0])) {
        let mayorMenor = ordenarDeMayorAMenor(numeros);    
        let menorMayor = ordenarDeMenorAMayor(numeros);
        document.getElementById("resultados").innerHTML = 
            `De mayor a menor: ${mayorMenor.join(", ")}<br>` +
            `De menor a mayor: ${menorMayor.join(", ")}`;
    }else{
        document.getElementById("resultados").innerHTML = 'Los números son iguales!!!'

    }

})
// console.log(numeros);


// let numerosOrdenados = obtenerNumeros(numeros);
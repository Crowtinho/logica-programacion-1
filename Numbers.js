import promptSync from 'prompt-sync';

const prompt = require('prompt-sync')();

let numeros = [];

for(let i=0; i < 3; i++){
    numeros[i] = parseFloat(prompt(`Ingresa el número ${i+1}: `))
    while(numeros[i] != parseFloat(numeros[i])){
        console.log("no es un  numero entero!!!!");
        numeros[i] = parseFloat(prompt(`Ingresa el número ${i+1}: `))
    }
}

// console.log(numeros);


// numeros.sort((a,b)=> a-b);
// for(let num of numeros){
//     console.log(num); 
// }

//algoritmo de ordenaMIENTO DE MENOR A mayor
for(let i = 0; i < numeros.length -1; i++){
    for(let j = 0; j < numeros.length -i -1; j++){
        if (numeros[j] > numeros[j + 1]){
            let numerosOrdenados = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = numerosOrdenados;
        }
    }
    
}
console.log(numeros);

//algoritmo de ordenaMIENTO DE mayor A menor
for(let i = 0; i < numeros.length -1; i++){
    for(let j = 0; j < numeros.length -i -1; j++){
        if (numeros[j] < numeros[j + 1]){
            let numerosOrdenados = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = numerosOrdenados;
        }
    }
    
}
console.log(numeros);




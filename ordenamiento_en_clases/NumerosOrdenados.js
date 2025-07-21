import promptSync from 'prompt-sync';
const prompt = promptSync();
// let numeros = [];

//función para obtener los números
export function obtenerNumeros(){
    let numeros = [];
    for(let i=0; i < 3; i++){
        numeros[i] = parseFloat(prompt(`Ingresa el número ${i+1}: `))
        while(numeros[i] != parseFloat(numeros[i])){
            console.log("no es un  numero entero!!!!");
            numeros[i] = parseFloat(prompt(`Ingresa el número ${i+1}: `))
        }
    }
    return numeros;
}

//

export function ordenarDeMayorAMenor(numeros){
    // numeros = [];
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
}



//algoritmo de ordenaMIENTO DE mayor A menor
export function ordenarDeMenorAMayor(numeros){
    // numeros = [];
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
}




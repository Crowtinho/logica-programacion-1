
export function ordenarDeMayorAMenor(numerosIngresados){
    // numeros = [];
    let numeros = [...numerosIngresados];
    for(let i = 0; i < numeros.length -1; i++){
        for(let j = 0; j < numeros.length -i -1; j++){
            if (numeros[j] < numeros[j + 1]){
                let numerosOrdenados = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = numerosOrdenados;
            }
        }
        
    }
    return numeros
    // console.log(numeros);
}



//algoritmo de ordenaMIENTO DE mayor A menor
export function ordenarDeMenorAMayor(numerosIngresados){
    // numeros = [];
    let numeros = [...numerosIngresados];
    for(let i = 0; i < numeros.length -1; i++){
        for(let j = 0; j < numeros.length -i -1; j++){
            if (numeros[j] > numeros[j + 1]){
                let numerosOrdenados = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = numerosOrdenados;
            }
        }
    }
    return numeros
    console.log(numeros);
}




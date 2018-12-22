const numeros = [2, 5, 8, 9, 12]

numeros.forEach((numero, index, arrayCompleto) => {
    console.log(numero)
    console.log(index)
    console.log(arrayCompleto)
    console.log(arrayCompleto[index] == numero)
});

const numerosGrandes = numeros.map(numero => {
    return numero * 2   
});

console.log(numerosGrandes)
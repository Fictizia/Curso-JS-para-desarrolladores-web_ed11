const numeros = [2, 5, 8, 9, 12]

numeros.forEach(numero => {
    console.log(numero)
});

const numerosGrandes = numeros.map(numero => {
    return numero * 2   
});

console.log(numerosGrandes)
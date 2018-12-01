//ejercicio de tener todas las tablas hasta el 9

function tablaDel(multiplicando) {
    
  for (let multiplicador = 1; multiplicador <=10; multiplicador++) {
    const resultado=multiplicando*multiplicador;

    console.log( `${multiplicando}*${multiplicador}=${resultado}`)
    
}
    
}

for (let index = 1; index <= 9; index++) {
  tablaDel(index)
    
}
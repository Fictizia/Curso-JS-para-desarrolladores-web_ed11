

tablaDel(4,50)//aqui se pasa los valores de multiplicando y de tope, seria la tabla del 4 hasta el 50 como tope.

function tablaDel(multiplicando,tope) {
    
  for (let multiplicador = 1; multiplicador <=tope; multiplicador++) {
    const resultado=multiplicando*multiplicador;

    console.log( `${multiplicando}*${multiplicador}=${resultado}`)
    
}
    
}
 
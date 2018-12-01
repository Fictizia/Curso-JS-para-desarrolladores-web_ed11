
function tablaDel(multiplicando,tope) {
    
    for (let multiplicador = 1; multiplicador <=10; multiplicador++) {
      const resultado=multiplicando*multiplicador;
  
      console.log( `${multiplicando}*${multiplicador}=${resultado}`)
      
  }
      
  }
function tablaDelUnoAlNueveConTope(tope){

  for (let index = 1; index <= 9; index++) {
    tablaDel(index,tope)
      
  }
  console.log(`-----------------`)
}

//Esto ya no hace falta con la linea 29
//   tablaDelUnoAlNueveConTope(100)
//   tablaDelUnoAlNueveConTope(50)
//   tablaDelUnoAlNueveConTope(25)


//para que llame a la funcion de la tablaDelUnoAlNueveConTope las tres veces de 100,50,25 multiplicando por dos.

for (let tope=25; tope<=100;tope=tope*2){
    tablaDelUnoAlNueveConTope(tope)
}






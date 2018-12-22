class Televisor {
    constructor(pulgadas, material, resolucion){
        this.pulgadas = pulgadas
        this.material = material
        this.resolucion = resolucion
    }

    encender(){
        console.log('hola que quieres ver?')
    }

    apagar(){
        console.log('adios mundo cruel')
    }

    reproducir(canal) {
        console.log(`Estamos viendo ${canal}`)    
    }

}

//const televisorClase = new Televisor(48, 'plastico', 4000)

televisorClase.encender()
televisorClase.reproducir(8)
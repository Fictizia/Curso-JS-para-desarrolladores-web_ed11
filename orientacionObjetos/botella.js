class Botella {
    constructor(color, tapon, material){
        this.color = color
        this.tapon = tapon
        this.material = material
    }
}

const botellaAgua = new Botella('transparente', 'rojo', 'plastico')
const botellaGasolina = new Botella('negra', 'metalico', 'metal')
const botellaLeche = {color:'transparente', tapon: 'blanco', material: 'cristal'}

console.log(botellaAgua.material)
console.log(botellaGasolina.material)
console.log(botellaLeche.material)
# Clase: 17 Noviembre 2018

## Javascript

### Tipos de datos

* Numeros
    * Enteros: 0, 1, 2
    * Naturales: 0,4

* String
    * "Hola soy un texto"
    * "5"

* Boolean
    * True
    * False
    
* Array
    * var lista ["pepinos", "tomates", "huevos"]
    * lista.lenght = 3

* Objetos
    * Este tipo es más complicado y lo detallaremos más adelante.


#### Declaración de variables

Usaremos "let" en vez de "var" para declarar una variable. También podemos usar "const"

>let = 5
>const guapo = true (no podemos cambiar el valor de la variable)

#### Arrays

> let unArray = ['uno', 'dos', 3]

unArray.length : Saber la longitud del array
unArray[1] : Saber la posición del array

#### Comparadores

*  5 > 2 // true
*  5 > 6 // false
*  5 > 5 // false
*  5 == 5 // true - tienen que ser iguales
*  5 === '5' // false - tienen que ser iguales y del mismo tipo
*  5 <= 5 // true
*  5 <= '5' // false 
*  && // and 
*  || // or


> console.log(5 <= '5' && typeof 5 === typeof '5') // FALSE (en el and tienen que ser ambos true)



### Condicionales

Ejemplo discoteca:

> const edad = 5
> const mayorEdad = 18
> 
> 
> if (edad >= mayorEdad){
> console.log('PUEDES ENTRAR')
> }else{
>     console.log('NO PUEDES ENTRAR, ERES MENOR DE EDAD')
> }


##### Comandos básicos consola

ls: Dónde estoy
cd carpeta: Entrar en un directorio o carpeta
cd .. : Volver atrás





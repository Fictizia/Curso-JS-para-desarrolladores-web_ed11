# CURSO JS 2
# Objetos
Los objetos son un conjunto de propiedades, podriamos asemejarlo a un diccionario en el que estas propiedades se muestran como claves (keys) con un valor (value). En javascript se les denomina objetos anémicos, ya que sólo contienen datos.
Estas propiedades pueden contener cualquier tipo de datos; arrays, strings, números...

```
const teacher = {  name:'Jose',     //propiedad y valor. Valor de tipo string
                    age: 35,      //valor de tipo numérico
                    good: true,     // valor de tipo booleano
                    friends: ['ulises','carlos','borja'],      //tipo array
}
```
Para acceder al valor de la propiedad de un objeto basta con llamar al objeto y a continuación escribir la propiedad de ese objeto. El ejemplo inferior devolverá true como valor de "good"

```
teacher.good //accedo a esa propiedad del objeto
```
### **Objetos compuestos por varios objetos**
Los objetos pueden contener otros objetos, en el ejemplo inferior la propiedad 'friends' de 'teacher' está formada por un array de varios objetos.

```

const ulises = {    name:'Ulises',
                    job:'Developer',
                    goodPerson: true,
}

const carlos = {    name:'Carlos',
                    job:'Developer',
                    goodPerson: true,
}

const borja = {    name:'Borja',
                    job:'Security guard',
                    goodPerson: true,
}


const teacher = {  name:'Jose', //propiedad y valor
                    age: 35,
                    good: true,
                    friends: [ulises,carlos,borja],
}
```
### Formas más complejas de obtener los valores de un objeto
En el siguiente ejemplo, y partiendo del anterior, quiero saber cual es el trabajo del segundo amigo del objeto 'teacher'. Lo más recomendable es, dado un problema, simplificarlo en problemas más pequeños, por eso 'trozeo' el acceso a los datos hasta llegar a aquel que quiero conseguir.

```
// accedo al objeto teacher y su propiedad friends. Lo guardo en una variable.
const teacherFriends = teacher.friends 

//accedo a la posición 1 del array friends que me dará el segundo amigo de teacher
const teacherSecondFriend = teacherFriends[1] //array

//accedo a la propiedad job del segundo amigo de teacher
const teacherSecondFriendJob = teacherSecondFriend.job //objeto
```

# Sobre las comillas
Debido a que en html se utilizan siempre las comillas dobles, se recomienda utilizar las comillas simples o las comillas acostadas en javascript. La tendencia actual es utilizar estas últimas. Las ventajas de utilizar las comillas acostadas está en que puedo introducir espacios, tabulaciones y llamar variables directamente por medio de la utilización de ${variable}.

```
`Mi nombre es ${teacher.name} 
la cantidad de amigos que tengo es ${numberOfTeacherFriends}`;
```

# Sobre el orden de lectura de las variables y sus valores
**Tipos de datos primitivos**

```
let firstValue = 1
let secondValue = firstValue
```
La segunda varible y la primera tienen el mismo valor en este momento, la segunda variable se queda con el valor de la primera en el momento en el que la he declarado. Si más adelante cambio el valor de firstValue, secondValue seguirá valiendo 1, esto sólo ocurre con los tipos de datos primitivos.

```
firstValue = 5
//secondValue seguirá valiendo 1
```

**Tipos de datos complejos**

```
let firstValue = ['peras','huevos','manzanas']
let secondValue = firstValue
```
La segunda variable y la primera siempre tendrán el mismo valor. Si cambio el valor a firstValue más adelante secondValue adquirirá el nuevo valor también.

```
firstValue = ['peras','huevos','pimientos']
//secondValue valdrá también ['peras','huevos','pimientos']
```

# Métodos
Hay dos tipos de métodos dinámicos y estáticos* más adelnate se explicará más detallado cuando lleguemos a las funciones pra poder diferenciarlos de estas.

En el siguiente ejemplo tenemos el objeto lista de la compra, vamos a cceder mediante un método estático a sus propiedades.

```
const lista =  {
    barrasPan:2,
    huevos:12,
    berenjenas:5
}

Object.keys(lista)    //Método estático
//devuelve un array con las claves de ese objeto

const shoppingList = ["barrasPan", "huevos", "berenjenas"]
```

Como ejemplo de método dinámico
```
shoppingList.length   //Método dinámico
//devuelve la cantidad de datos de ese array
```
### Métodos más utilizados del objeto String
* toUpperCase
* toLowerCase
* Split
* trim
* slice
* lentgh

### Métodos más utilizados del objeto Array
* indexOf    // devuelve la primera posisión en la que está un elemento
* includes  //devuelve la última posición de un elem
* pop
* push
* slice
* sort


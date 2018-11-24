# Clase: 23 Noviembre 2018

## Javascript

### Objetos

En JavaScript usaremos objetos anémicos (sólo tienen propiedades -datos en crudo-). 

Sólo contendrán strings, números, booleanos, arrays y otros objetos dentro de ellos mismos.

No contienen funciones.


* Ejemplo de objeto

> const teacher = { name: 'Jose',
>                    age: 35,
>                    good: true,
>                    friends: ['Ulises', 'Carlos', 'Borja'],
> }
> 
> console.log(teacher)

* Uso de Strings, cadenas de texto

> const name = 'Victoria'
> const age = 35
> const doing = 'Studying'
> const goodAtMath = true
> 
> let anotherText = `Hello my name is ${name}
> I am ${age} years old
> and I'm ${doing}
> `
> 
> console.log(anotherText)
> 
* Ejemplo de objeto

> const ulises = { name: 'Ulises',
>                 job: 'Developer',
>                 goodPerson: true }
> 
> const carlos = { name: 'Carlos',
>                 job: 'Developer',
>                 goodPerson: true }
> 
> const borja = { name: 'Borja',
>                job: 'Security guard',
>                goodPerson: true }
> 
> const teacher = { name: 'Jose',
>                    age: 35,
>                    good: true,
>                    friends: [ulises, carlos, borja],
> }
> 
> const teacherFriends = teacher.friends // objet
> const teacherSecondFriend = teacherFriends[1] // array
> const teacherSecondFriendJob = teacherSecondFriend.job // objet
> 
> console.log(teacherSecondFriendJob)
> 
> // console.log(teacher.friends[1].job) Forma corta de solucionar el problema anterior. 
> 
> //const numberOfJosesFriends = teacherFriends.length

> //console.log(`${teacher.name} tiene ${numberOfJosesFriends} amigos`)


* Acceder a una lista de propiedades

Para acceder a una lista de propiedades: Object.keys(lista)

Ejemplo:

> const lista = {
>     barrasPan: 2,
>     huevos: 12, 
>     berenjenas: 5
> }
> 
> const food = Object.keys(lista)
> // lista.food[0]
> // lista.food[1]
> // lista.food[2]


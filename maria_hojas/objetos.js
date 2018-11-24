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

//console.log(teacher.good) //accedo a esa propiedad del objeto

//console.log(teacher.friends[1].job) //primero accedo a carlos porque esta en un array de objetos y una vez que estoy en carlos llamo a la propiedad normal usando el punto

//const teacherFriends = teacher.friends;
//const numberOfMariaFriends = teacherFriends.length;

//console.log(`Mi nombre es ${teacher.name} cantidad de amigos es ${numberOfMariaFriends}`);//esta llamada a la variable solo es posible con las co,illas acostadas

//let teacherSecondFriendJob = teacher.friends[1].job;
//console.log(teacherSecondFriendJob)

const teacherFriends = teacher.friends //objeto
const teacherSecondFriend = teacherFriends[1] //array
const teacherSecondFriendJob = teacherSecondFriend.job //objeto

//console.log (teacherSecondFriendJob);


const lista =  {
    barrasPan:2,
    huevos:12,
    berenjenas:5
}

const food = Object.keys(lista) //para acceder directamente a las propiedades de un objeto
const element = food[0]; //barras de pan
const loQueQuieroSaber = lista[element] // es igual que lista['barrasPan']




console.log(`La key es ${element} y el valor es ${loQueQuieroSaber}`)
//STRINGS

//Comillas

// const aText = "a string"
// const anotherText = 'another string'
// const theText = `just other way, or not`

// const anotherText =`It\s magic`

// console.log('anotherText')

//===================

// const name = 'Victoria'
// const age = 35
// const doing = 'Studyng'
// const goodAtMath = true

// const anotherText = `Hello my name is ${name}
// I am ${age} years old,
// and I'm ${doing}`

// console.log(anotherText)





//OBJETOS

const ulises = {  name: 'Ulises',
                    job: 'Developer',
                    goodPerson: true,
}

const carlos = {  name: 'Carlos',
                    job: 'Developer',
                    goodPerson: true,
}

const borja = {  name: 'Borja',
                    job: 'Security guard',
                    goodPerson: true,
}

const teacher = {  name: 'Jose',
                    age: 35,
                    good: true,
                    friends: [ulises, carlos, borja],
}


//const teacherFriends = teacher.friends

// const numberOfJosesFriends = teacherFriends.length

// console.log(`${teacher.name} tiene ${numberOfJosesFriends} amigos`)

const teacherFriends = teacher.friends // objeto
const teacherSecondFriend = teacherFriends[1] // array
const teacherSecondFriendJob = teacherSecondFriend.job // objeto

console.log(teacher.friends[1].job)
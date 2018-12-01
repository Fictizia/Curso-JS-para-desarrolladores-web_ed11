const ulises = { name: 'Ulises',
                job: 'Developer',
                goodPerson: true }

const carlos = { name: 'Carlos',
                job: 'Developer',
                goodPerson: true }

const borja = { name: 'Borja',
               job: 'Security guard',
               goodPerson: true }

const teacher = { name: 'Jose',
                   age: 35,
                   good: true,
                   friends: [ulises, carlos, borja],
}

const teacherFriends = teacher.friends // objet
const teacherSecondFriend = teacherFriends[1] // array
const teacherSecondFriendJob = teacherSecondFriend.job // objet

console.log(teacherSecondFriendJob)

// console.log(teacher.friends[1].job)

//const numberOfJosesFriends = teacherFriends.length

//console.log(`${teacher.name} tiene ${numberOfJosesFriends} amigos`)
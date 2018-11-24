const ulises = {name: 'Ulises',
                job:'Developer',
                goodPerson: true}

                const carlos = {name: 'Carlos',
                job:'Developer',
                goodPerson: true}

                const borja = {name: 'Borja',
                job:'Developer',
                goodPerson: true}

const teacher = {

    name:'Jose', 
    age: 35,
    good: true,
    friends: [ulises, carlos, borja]
}


 const teacherFriend =  teacher.friends // object
 const SecondFriend = teacher.friends[1] // array


console.log(SecondFriend.job)

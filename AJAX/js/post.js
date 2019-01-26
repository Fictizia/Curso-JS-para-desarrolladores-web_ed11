const apiUrl = 'https://swapi.co/api/1'

const data = {
    name: 'jose',
    age:'27'
}

const myHeader = {
    'Cookie':'eioqwyjhksdhkljdfoy39rehkkljsdfhkl8oy3jkxjdj'
}

const extendedData = {
    method: 'PATCH', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: myHeader
}

async function llamadaApi(){
    let planets = await fetch(apiUrl, extendedData)
    planets = await planets.json()
    console.log(planets.results) // 0 a 9 name y population
    representar(planets.results)
}

llamadaApi()

POST, GET, PUT, PATCH, DELETE
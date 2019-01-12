const apiUrl = 'https://swapi.co/api/newuser'

const data = {
    user: 'jose',
    pass:'lalalaal'
}

const options = {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'token':'lasdjhflñkjñleqwufdsafjasñdlfjasdlj'
    }
}

async function llamadaApi(){
    let planets = await fetch(apiUrl, options)
    planets = await planets.json()
    console.log(planets.results) // 0 a 9 name y population
    representar(planets.results)
}

llamadaApi()

POST, GET, PUT, PATCH, DELETE
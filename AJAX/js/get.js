const apiUrl = 'https://swapi.co/api/planets'


async function llamadaApi(){
    let planets = await fetch(apiUrl)
    planets = await planets.json()
    console.log(planets.results) // 0 a 9 name y population
    representar(planets.results)
}

llamadaApi()

const pintame = document.getElementById('pintame')

function representar(planetList){
    planetList.forEach(planet => { // function(planet) se puede sustituir por planet =>
        pintame.innerHTML += `<b>${planet.name}</b> population: ${planet.population} <br>`
    });
}
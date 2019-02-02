const baseUrl = 'https://www.potterapi.com/v1'
const apiKey = '$2a$10$HuDft9VcELTjqksUYtVYH.puSNrE1IafmOvL05SCPZxTJLUTUieQC'
const finalUrl = `${baseUrl}?key=${apiKey}/characters`

weather = 'https://api.wunderground.com/api/e2caab4e544fbb5e/forecast/geolookup/conditions/lang:SP/q/40.42273,-3.7130593000000003.json'

async function llamadaApi(){
    let characters;
    let counter = 0;
    try{
         characters = await fetch(weather)
    }catch(error){
        console.log('He tenido un error en la parte de fetch y es:', error)
        if (counter < 1){
            errorCase(llamadaApi, counter)
        }
        
    }
    
    characters = await characters.json()

    console.log(characters) // 0 a 9 name y population
    //representar(characters)
}

llamadaApi()

// const pintame = document.getElementById('pintame')

// function representar(planetList){
//     planetList.forEach(planet => { // function(planet) se puede sustituir por planet =>
//         pintame.innerHTML += `<b>${planet.name}</b> population: ${planet.population} <br>`
//     });
// }


function errorCase(callback, counter){
    setTimeout(() => {
        counter++
        callback()
    }, 1700);
}




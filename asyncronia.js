// ASYNC / AWAIT
const apiUrl = 'https://api.randomnumber.com'

async function llamadaApi(){
    let randomNumbers = await fetch(apiUrl)
    randomNumbers = await randomNumbers.json()
    console.log(randomNumbers) // 0 a 9 name y population
    
}

// PROMESAS

const apiUrl = 'https://api.randomnumber.com'

fetch(apiUrl).then(response => response.json())
  .then(function(responseInJson) {
    console.log(responseInJson);
  });

// CALLBACK

const cb = function(){
    setTimeout(() => {
        console.log('I am too')
    }, 3000);
}


    setTimeout(() => {
        console.log('I am asincronus')
        
    }, 5000);
    
    

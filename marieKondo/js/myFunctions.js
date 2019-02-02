const url = 'https://randomuser.me/api'
async function llamadaApi() {

    let characters = await fetch(url)
    characters = await characters.json()
    let results = characters.results[0]
    //gender, email
    return {gender: results.gender,
            email: results.email }
}

async function paint(user, whereToPaint){
    user = await user
    whereToPaint.innerText += `email:${user.email} gender: ${user.gender}`

}
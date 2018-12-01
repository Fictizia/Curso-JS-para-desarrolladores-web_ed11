const name = 'Adrián'

function sayMyName() {
     console.log(name)
}

sayMyName()




function sayMoreNames(name, surname){
    const completeName = `${name} ${surname}`

    if(completeName.length < 20){
        console.log(`tu nombre ${completeName} es muy corto`)
    }else{
        console.log(`tu nombre ${completeName} es bonito`)
    }
}

sayMoreNames('Antonio','González')
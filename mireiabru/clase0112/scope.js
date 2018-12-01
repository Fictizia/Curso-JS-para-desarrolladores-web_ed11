/*const name = 'Adrián'

function sayMyName(){
    console.log(name)
}

sayMyName()*/


function sayCompleteName(name, surname){
    const completeName = `${name} ${surname}` // name + ' ' + surname
    
    if(name.lenght < 9){
        console.log(`Tu nombre ${completeName} es muy corto`)
    }else{
        console.log(`Tu nombre ${completeName} es bonito`)
    }       

}

sayCompleteName('Yi', 'Hang')

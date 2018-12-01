const name = 'Adrián'

function sayMyName(){
    console.log(name)
}

sayMyName()
{
function sayCompleteName(name, surname){
    const completeName = `${name} ${surname}`
    
    nameLongOrShort();

    function nameLongOrShort() {
        let iAm = 'I don\'t know yet'
        if (completeName.length < 9) {
            console.log(`tu nombre ${completeName} es muy corto`);
            iAm = 'I am short'
        }
        else {
            console.log(`tu nombre ${completeName} es bonito`);
            iAm = 'I am long'
        }

        console.log(iAm)
    }
}

sayCompleteName('Yi','Hang')

}
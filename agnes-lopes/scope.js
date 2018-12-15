/*const name ='Adrian'

function sayMyName (){
  console.log(name)
}
*/

function sayCompleteName(name, surname){
   const completeName = `${name} ${surname}`

   if(name.lenght < 5){
        console.log(`tu nombre ${completeName} es muy corto`)
   } else{
        console.log(`tu nombre ${completeName} es bonito`)
   }

}
sayCompleteName (`Agnes` , `Lopes`)


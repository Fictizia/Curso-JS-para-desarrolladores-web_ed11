const list = ['María', 'Jaime', 'hola']

const myVar = 'hola'

list.forEach((element, index) => {
    if(myVar === element){
        list[index-1].innerText = 'YUPI'
    }
    
});
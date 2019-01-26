const names = ['María', 'Jaime', 'Tere', 'Agnes', 'Victoria']

const paintList = document.querySelector('#paint')

names.forEach(name => {
    paintList.innerHTML += `<li> ${name} </li>`
});

paintList.addEventListener('click', function(){
    //changeBackground(event.target)
    identify(event.target)
})


function changeBackground(element) {
    element.classList.add('highlight')
    
}

function identify(liObject) {
    const allLis = liObject.parentNode
    const list = allLis.childNodes
    list.forEach((element, index) => {
        if(element == liObject){
            changeBackground(list[index-1])
        }
    });
}
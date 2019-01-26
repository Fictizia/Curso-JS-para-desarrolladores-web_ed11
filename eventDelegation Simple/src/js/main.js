function changeBackground(element) {
    element.classList.add('highlight')
    
}

const all = document.querySelector('#list')

all.addEventListener('click', function(){
  
   const clickedElement = event.target
   clickedElement.classList.add('highlight')
  
})

// LLAMO UNA API Y OBTENGO UN ARRAY DE NOMBRES
const names = ['María', 'Jaime', 'Tere', 'Victoria', 'Agnes']

names.forEach(name => {
    all.innerHTML += `<li> ${name} </li>`
});









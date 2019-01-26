function changeBackground(element) {
    element.classList.add('highlight')
    
}

const all = document.querySelector('#list')

all.addEventListener('click', function(){
  
   const clickedElement = event.target.id
   const elementToHigh = clickedElement.slice(-1)
   const myElementIdNumber = elementToHigh - 1
   const myElementId = `abc${myElementIdNumber}`  
   const elementToPaint = document.getElementById(myElementId)
   elementToPaint.classList.add('highlight')
  
})

// LLAMO UNA API Y OBTENGO UN ARRAY DE NOMBRES
const names = ['María', 'Jaime', 'Tere', 'Victoria', 'Agnes']

names.forEach((name, index) => {
    all.innerHTML += `<li id=abc${index}> ${name} </li> <input type="checkbox" "checked"=true>`
});



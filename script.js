
let inpt = document.getElementById('inpt')
let btn = document.getElementById('btn')
let ul = document.getElementById('ul')
let todo = [];

function add() {

    todo.push(inpt.value);
    inpt.value = '';


    let data = '';
    for (let item of todo) {

        if (item == '') {
            data == ''

        } else {
            data += `<li class="list-group-item">${item}</li>`
            
        }
       
        
    }
   

    ulist.innerHTML = data;
   
}
btn.addEventListener('click', add);
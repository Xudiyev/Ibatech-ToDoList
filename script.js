"use strict";
let input = document.getElementById('inpt')
let button = document.getElementById('btn')
let ulist = document.getElementById('ulist')
button.addEventListener('click', () => {
    if (input.value == 0) {
        alert("Kindly Enter Task Name!!!!")

    }
    else {
        ulist.innerHTML += `
        <li class="list-group-item">${input.value} 
        <button  class="btn btn-danger " id = "deleteBtn">Delete</button>
        <button id="doneBtn" class="btn btn-info">Done</button>
        </li>
        `;
        input.value = '';
        var mylists = document.querySelectorAll("#deleteBtn");
        // We take button length
        for(var i=0; i<mylists.length; i++){
            // We choose whic list we a want to delete
            mylists[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // Done button 
        var doneButton=document.querySelectorAll("#doneBtn")
        for(var i=0; i<doneButton.length; i++){
            doneButton[i].onclick = function(){
                this.parentNode.style.textDecoration="line-through";
            }
        }
    }
});


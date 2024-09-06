//select add input overlay
var input = document.getElementById("input")
var overlay = document.getElementById("overlay")
var add = document.getElementById("add")
add.addEventListener("click",function(){
    overlay.style.display="block" 
    input.style.display="block"
})
//select cancel
var inputcancel= document.getElementById("input-cancel")
inputcancel.addEventListener("click",function(event){
    overlay.style.display="none" 
    input.style.display="none"
    event.preventDefault()

})
//select add
var box=document.querySelector(".box")
var inputadd= document.getElementById("input-add")
var titleinput= document.getElementById("titleinput")
var subjectinput= document.getElementById("subjectinput")
var contentinput= document.getElementById("contentinput")
inputadd.addEventListener("click",function(event){
   event.preventDefault()
   var div =document.createElement("div")
   div.setAttribute("class","content-box")
  
   div.innerHTML=`
   <h2>${titleinput.value}</h2>
   <h3>${subjectinput.value}</h3>
   <p>${contentinput.value}</p>
   
   <button id="remove-btn" onclick="deletebox(event)">Remove</button>    `
   box.append(div)
    overlay.style.display="none" 
    input.style.display="none"

})
function deletebox(event)
{
 event.target.parentElement.remove()
}

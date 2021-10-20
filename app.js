let option = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
const dateElement = document.querySelector(".date");

dateElement.innerHTML = today.toLocaleDateString("en-US", option);

const image = document.querySelector(".image");
image.appendChild(dateElement)

const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");
const input = document.querySelector(".input");


//EVENT-lISTNERS:-
addBtn.addEventListener("click",addTodo);
document.addEventListener("DOMContentLoaded",getTodos)


//FUCNTIONS:-
function addTodo(event){
    event.preventDefault();
    if (input.value !== "") {

    const item = document.createElement("div");
    item.classList.add("item");

    const circle = document.createElement("div");  
    circle.classList.add("circle");
    item.appendChild(circle);

    const solidCircle = document.createElement("i");
    solidCircle.classList.add("fa-solid");
    solidCircle.classList.add("fa-circle");
    circle.appendChild(solidCircle);
 
    const itemLi = document.createElement("li");
    itemLi.classList.add("item-li");
    item.appendChild(itemLi);
    
    itemLi.innerText = input.value ;    //For Input

    saveLocalTodos(input.value);

    const trash = document.createElement("div");
    trash.classList.add("trash");
    item.appendChild(trash);

    const trashI = document.createElement("i");
    trashI.classList.add("fa-solid");
    trashI.classList.add("fa-trash");
    trash.appendChild(trashI);


    list.appendChild(item);

    input.value = "";
}
}; 


list.addEventListener("click",function(e){
        const  content = e.target;

       if (content.classList[0] === "trash") {
           const contentTrash = content.parentElement;
           const contentTrashLi = content.previousSibling;
           removeLocalTodos(contentTrashLi.innerText);

           contentTrash.remove();
        
       }
      
       if (content.classList[0] === "circle") {
           const contentCircle = content.firstChild;
           const contentLi = content.nextSibling;

           contentCircle.classList.toggle("fa-circle-check");
           contentLi.classList.toggle("item-li-cut");
       }

}); 

// list.addEventListener("mouseover",function(){
//         const trash = document.querySelectorAll(".trash");
//         trash.forEach(function(e){
//             e.classList.toggle("trash");
//         });
// });

   
function saveLocalTodos(todo)
 {
    //check have already things???
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos =[];
    }
    else{
        todos =JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
} 

function getTodos(){    
    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos =[];
    }
    else{
        todos =JSON.parse(localStorage.getItem("todos"))
    }
    

    todos.forEach(function(todo){
    const item = document.createElement("div");
    item.classList.add("item");

    const circle = document.createElement("div");  
    circle.classList.add("circle");
    item.appendChild(circle);

    const solidCircle = document.createElement("i");
    solidCircle.classList.add("fa-solid");
    solidCircle.classList.add("fa-circle");
    circle.appendChild(solidCircle);

    const itemLi = document.createElement("li");
    itemLi.classList.add("item-li");
    item.appendChild(itemLi);
    
    itemLi.innerText = todo ;    //For Input


    const trash = document.createElement("div");
    trash.classList.add("trash");
    item.appendChild(trash);

    const trashI = document.createElement("i");
    trashI.classList.add("fa-solid");
    trashI.classList.add("fa-trash");
    trash.appendChild(trashI);


    list.appendChild(item);


    });
};

function removeLocalTodos(todo){

    let todos;
    if(localStorage.getItem("todos")===null)
    {
        todos =[]; 
    }
    else{
        todos =JSON.parse(localStorage.getItem("todos"))
    }
    
    todos.splice(todos.indexOf(todo),1);
    localStorage.setItem("todos",JSON.stringify(todos));

     

    
}
 

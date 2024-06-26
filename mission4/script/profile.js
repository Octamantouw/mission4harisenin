const input = document.getElementById('inputTodo')
const priority = document.getElementById('priorityTodo')
const taskList = document.getElementById("taskList")

//add to do 
const addTask=()=>{
    const d = new Date
    const day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    // var stat= ""
    // const dueDate= (d.getDay())+1
    // if(d.getDay() < dueDate){
    //     stat="Overdue";
    // }else{
    //     stat="active"
    // }

    if(input.value===""){
        alert("Write your Task")
    }
    else{
    const li = document.createElement('li')
    li.innerHTML=input.value+` (Priority : ${priority.value})`+ 
    ` ${day[d.getDay()]}, ${d.getDate()}-${d.getMonth()}-${d.getFullYear()}  `
    // `Due Date : ${day[dueDate]}, ${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`+
    // ` Status : ${stat}`
    taskList.appendChild(li)
    const span =document.createElement('span')
    span.innerHTML= "\u00d7"
    li.appendChild(span)
    }
    input.value=""
    saveData()
}

//Delete and change class to Checked and send data to done process
taskList.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        var checked="checked"
        e.target.classList.toggle(checked)
        if(checked){
            localStorage.setItem("done",taskList.innerHTML)
        }else if(!checked){
            localStorage.removeItem("done")
        }
        saveData()
    }else if(e.target.tagName==="SPAN"){
        localStorage.setItem('deleted',e.target.parentElement)
        e.target.parentElement.remove()
        saveData()
    }
},false)

// //Overdue
// const date= new Date
// if(li.classList!=checked&&){
    
// }


//save data so data not dissapear when load
const saveData=()=>{
    localStorage.setItem("data",taskList.innerHTML)
}
const showData=()=>{
    taskList.innerHTML=localStorage.getItem("data")
}
showData()

//Search Feature
const searchTask=()=>{
    var input,filter,textValue,a,li;
    input = document.getElementById("searchBar")
    filter = input.value.toUpperCase();
    li=taskList.getElementsByTagName("li")
    console.log(li);
    for(i=0;i<li.length;i++){
        a=li[i]
        textValue=a.textContent||a.innerText
        if(textValue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
    }
}

// Dark Mode Feature
const darkMode=()=>{
    var e =document.body
    e.classList.toggle("darkMode")
}
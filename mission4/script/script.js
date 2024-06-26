const inputTodo = document.getElementById("inputTodo")
const taskList = document.getElementById("taskList")
const priority = document.getElementById("priorityTodo")
const searchBar = document.getElementById("searchBar")
const searchTask =()=>{
    var a,textValue
    var list = taskList.getElementsByTagName('li')

    for(i=0;i<list.length;i++){
        a=list[i];
        textValue=a.textContent||a.innerText;
        if(textValue.indexOf(searchBar.value)>-1){
            list[i].style.display= "";
        }else{
            list[i].style.display="none"
        }
    }
}

const addTask =()=>{
    if(inputTodo.value===' '){
        alert("Please add task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputTodo.value+` ( Priority ${priority.value})`;
        taskList.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
inputTodo.value=""
saveData()
}
const softDelete=[]
taskList.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName==="SPAN"){
        var a = softDelete.push(e.target.parentElement.textContent)
        console.log(softDelete);
        // softDelete.push(e.target.parentElement.textContent)
        localStorage.setItem('deleted',e.target.parentElement.textContent)
        // localStorage.setItem('deleted',JSON.stringify(softDelete))
        e.target.parentElement.remove()
        // console.log(softDelete);
        saveData()
    }
},false)

const saveData=()=>{
    localStorage.setItem('data',taskList.innerHTML)
}
const showData=()=>{
    taskList.innerHTML=localStorage.getItem("data")
}
showData()

const darkMode=()=>{
    var element = document.body
    element.classList.toggle("darkMode")
}
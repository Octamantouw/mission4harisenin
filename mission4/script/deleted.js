const taskList = document.getElementById("taskList")

//delete List
taskList.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
})

// show done data
const showData=()=>{
    taskList.innerHTML=localStorage.getItem("done")
}
showData()


//seacrh feature
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

//dark Mode Feature
const darkMode=()=>{
    var e =document.body
    e.classList.toggle("darkMode")
}
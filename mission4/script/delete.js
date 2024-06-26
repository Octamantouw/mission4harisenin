const searchBar = document.getElementById("searchBar")
const taskList = document.getElementById("taskList")
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

const showDeleted=()=>{
    let li = document.createElement('li')
    // let data =localStorage.getItem('deleted').length
    // for(i=0;i<data;i++){
        //     li.innerHTML=localStorage.getItem(`${deleted[i]}`)
        // }
        li.innerHTML=localStorage.getItem('deleted')
        taskList.appendChild(li)
    }
// const showDelete=()=>{
//     let li = document.createElement('li')
//     // let data =localStorage.getItem('deleted').length
//     // for(i=0;i<data;i++){
//         //     li.innerHTML=localStorage.getItem(`${deleted[i]}`)
//         // }
//         li.innerHTML=localStorage.getItem('delete')
//         taskList.appendChild(li)
//     }
//     showDelete()
    showDeleted()
    taskList.addEventListener("click", function(e){
        if(e.target.tagName==="LI"){
            // localStorage.removeItem('deleted')
            e.target.parentElement.remove()
        }
    })
    
    const saveData=()=>{
        localStorage.setItem('delete',taskList.innerHTML)
    }
    saveData()

// saveData()

const darkMode=()=>{
    var element = document.body
    element.classList.toggle("darkMode")
}
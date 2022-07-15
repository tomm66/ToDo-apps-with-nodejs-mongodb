 
const tasksDOM= document.querySelector(".tasks")
const formDOM= document.querySelector(".task-form")
const buttonDom=document.querySelector(".btn.submit-btn")
const taskInputDOM=document.querySelector(".task-input")
const formAlertDOM=document.querySelector(".form-alert")


// api/v1/tasks 
const showTasks= async () =>{
    try {
        const {data: tasks} =await axios.get("/api/v1/tasks")
// no task
if (tasks.length < 1 ) {
    tasksDOM.innerHTML=` <h5 class="empty-list"> No task </h5>"`
}



 // input task
 const allTasks = tasks.map((task) => {
  const {completed,_id, name} = task

  //$(name)
  return`<div class="single-task ${completed && "task-completed"}">
  <h5>   
      <span><i class="far fa-check-circle"></i></span>${name}
      </h5>
  <div class="task-links">
      <a href="edit.html?id=${_id}" class="edit-link">
          <i class="fas fa-edit"></i>

      </a>
      <button type="button" class="delete-btn" data-id="${_id}">
      <i class= "fas fa-trash"></i></button>
  </div>
</div>`
 })      
 .join("")// remove ,
 tasksDOM.innerHTML=allTasks
    }catch(err) {
        console.log(err)
    }

}


showTasks()


//create new task
formDOM.addEventListener("submit",async (event) => {
  event.preventDefault();
  const name= taskInputDOM.value

  try {
      await axios.post("/api/v1/tasks", {name:name})
      showTasks()
      taskInputDOM.value=""
      formAlertDOM.style.display="block"
      formAlertDOM.textContent="Added your task"
      formAlertDOM.classList.add("text-success")
  }catch(err) {
      console.log(err)
      formAlertDOM.style.display="block"
      formAlertDOM.innerHTML= "Please enter less than 20 words"
      // why cant remove "text-success here?"
  } setTimeout(()=>{
      formAlertDOM.style.display ="none"
      formAlertDOM.classList.remove("text-success")
  }, 3000)
  return false
})

// delete task
tasksDOM.addEventListener("click", async(event)=>{
    const element =e.target
    console.log(element.parentElement)
    if(element.pareElement.classList.contains("delete-btn")){
        const id= element.parentElement.dataset.id
       try{ 
           await axios.delete(`/api/v1/tasks/${id}`)
           showTasks()
       }catch(err) {
           console.log(err)
       }
    
    }
}
)
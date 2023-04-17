// função de adicionar tarefa
function addTask(){

    const taskTitle = document.querySelector("#task-title").value
    console.log(taskTitle)
    // esta é a verificação da exsitencia do taskTitle //
    if(taskTitle){

        //clonagem do template
        const template = document.querySelector(".template")
        
        const newTask = template.cloneNode(true)
        console.log(newTask)
        // adicionando titulo
        newTask.querySelector(".task-title").textContent = taskTitle
        // removendo as classes desnecessarias 
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
        // adicionando tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)
        // adicionar o evento de remoção
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {

            removeTask(this) // esse "this" se refere a esta tarefa do click de botão
        
        })
        // evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completaTask(this)

        })

        // "limpa" o input, voltando ao texto "original" //
        document.querySelector("#task-title").value=""
    }

}
    // função remover tarefa

        function removeTask(task){
            console.log(task)
            task.parentNode.remove(true)
        }
        // função completar tarefa
        function completaTask(task){
            const taskCompleta = task.parentNode
            taskCompleta.classList.toggle("done")
        }
        


// evento de adicionar tarefas
const addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("testando o botão adicionar!")
    addTask()
})
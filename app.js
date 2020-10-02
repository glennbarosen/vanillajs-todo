
const todoInput = document.querySelector(".todo-input")
const submitButton = document.querySelector(".submit-btn")
const todos = document.querySelector(".todos")

submitButton.addEventListener('click', addTodo)
todos.addEventListener('click', deleteTodo)
todos.addEventListener('click', toggleDone)


function addTodo(e) {
    e.preventDefault()
    console.log('submitted')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-element')

    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')
    todoItem.innerText = todoInput.value
    todoDiv.appendChild(todoItem)


    const deleteTodo = document.createElement('button')
    deleteTodo.classList.add('delete-btn')
    deleteTodo.innerText = '💣'
    todoDiv.appendChild(deleteTodo)

    todos.appendChild(todoDiv)

    todoInput.value = ''
}

function deleteTodo(e) {
    if (e.target.classList[0] === 'delete-btn') {
        e.target.parentElement.remove()
        console.log('deleted')
    }

}

function toggleDone(e) {
    if (e.target.className === 'todo-item')
        e.target.className = 'todo-item-done'
    else if (e.target.className === 'todo-item-done')
        e.target.className = 'todo-item'

}
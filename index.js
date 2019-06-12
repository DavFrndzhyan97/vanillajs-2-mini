const todoForm = document.querySelector('form')

function addTodo(e) {
    e.preventDefault()
    const todo = document.createElement('li')
    const todoText = document.getElementById('item').value
    todo.innerText = todoText
    todo.addEventListener('click', completeTodo)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'X'
    deleteBtn.addEventListener('click', removeTodo)
    todo.append(deleteBtn)

    const todoList = document.querySelector('ul')
    todoList.appendChild(todo)
}

function removeTodo(e) {
    e.target.parentNode.remove()
}

function completeTodo(e){
    const checked = e.target.getAttribute('aria-checked')
    if(checked === 'true'){
        e.target.setAttribute('aria-checked', 'false')
    } else {
        e.target.setAttribute('aria-checked', 'true')
    }
}

todoForm.addEventListener('submit', addTodo)

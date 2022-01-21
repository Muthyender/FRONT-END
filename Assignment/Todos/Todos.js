let form = document.getElementById('form')
let input = document.getElementById('input')
let todosUL = document.getElementById('todos')


let localTodos = JSON.parse(localStorage.getItem('todoString'))
if(localTodos)
    localTodos.forEach(element => addTodo(element))

form.addEventListener('submit', (e) =>
{
    e.preventDefault()
    addTodo()
})

function addTodo(todo)
{
    let todoText = input.value
    if(todo)     //Local todos
        todoText = todo.text


    if(todoText)
    {
        let todoEl = document.createElement('li')
        todosUL.appendChild(todoEl)

        if(todo && todo.isCompleted)
            todoEl.classList.add('completed')
    
        todoEl.innerText = todoText
        input.value = ''

        todoEl.addEventListener('click', () =>
        {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) =>
        {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        updateLS()
    }
}

//Local Storage
function updateLS()
{
    let todoEls = document.querySelectorAll('li')
    let todoArr = []

    todoEls.forEach(element =>
        {
            todoArr.push({
                text: element.innerText,
                isCompleted: element.classList.contains('completed')
            })
        })
    localStorage.setItem("todoString", JSON.stringify(todoArr))
}


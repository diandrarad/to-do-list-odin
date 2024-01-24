import Project from './project'
import domModule from './dom'
import expandModal from './todoDetails'
import addTodoToProject from './addTodo'

const todoListElement = document.getElementById('todo-list')

export default function displayTodos() {
    // Clear the todo list before updating
    todoListElement.innerHTML = ''
    const projectIndex = domModule.getSelectedProjectIndex()
    if (projectIndex === null) return
    const projects = Project.loadProjects()
    if (projects.length === 0) return

    if (projects[projectIndex].todos.length === 0) {
        const placeholderItem = document.createElement('div');
        placeholderItem.className = 'p-5 text-center align-self-center fs-2';
        placeholderItem.textContent = 'No todos available for this project. Add a new todo!';
        todoListElement.appendChild(placeholderItem);
    }

    // Separate checked and unchecked todos
    const uncheckedTodos = projects[projectIndex].todos
      .map((todo, originalIndex) => ({ todo, originalIndex }))
      .filter(todo => !todo.todo.checked)
      
    const checkedTodos = projects[projectIndex].todos
      .map((todo, originalIndex) => ({ todo, originalIndex }))
      .filter(todo => todo.todo.checked)
  
    // Display unchecked todos first
    uncheckedTodos.forEach(({ todo, originalIndex }) => {
      displayTodoItem(todo, originalIndex);
    });
  
    checkedTodos.forEach(({ todo, originalIndex }) => {
      displayTodoItem(todo, originalIndex);
    })

    const addTodoBtn = document.getElementById('add-todo-btn')
    addTodoBtn.setAttribute('data-bs-toggle', "modal")
    addTodoBtn.setAttribute('data-bs-target', "#expanded-todo-modal")

    // Add event listener to the "Add Todo" button
    addTodoBtn.addEventListener('click', (e) => addTodoToProject())
  }

  function displayTodoItem(todo, index) {
    const projectIndex = domModule.getSelectedProjectIndex()
    const todoChecked = todo.checked
    const todoItem = document.createElement('li')
    todoItem.className = 'list-group-item d-flex justify-content-between align-items-center transition'

    // Add an event listener to handle checklist toggle after transition
    // Remove the transition class after the transition is complete
    todoItem.addEventListener('transitionend', () => {
      todoItem.classList.remove('transition')
    })

    // Determine the color based on priority
    let priorityColorClass = ''
    let priorityCategory = ''
    switch (todo.priority) {
      case '2':
        priorityColorClass = 'bg-danger'
        priorityCategory = 'High'
        break;
      case '1':
        priorityColorClass = 'bg-warning'
        priorityCategory = 'Medium'
        break;
      case '0':
        priorityColorClass = 'bg-success'
        priorityCategory = 'Low'
        break;
      default:
        break;
    }

    todoItem.innerHTML = `
        <input ${todoChecked ? 'checked' : ''} onclick="toggleChecklist(${index})" class="form-check-input me-1" type="checkbox">
        <label role="button" id='todo-${projectIndex}-${index}' class="ms-2 me-auto">
            <div ${todoChecked ? 'style="text-decoration: line-through;"' : ''} class="fw-bold">${todo.title}</div>
            ${todo.dueDate ? `Due Date: '${todo.dueDate}` : 'No Due Date'}
        </label>
        ${todo.priority ? `
            <p class="badge ${priorityColorClass} rounded-pill m-0 me-2">${priorityCategory} Priority</p>
        ` : ''}
        <p role="button" class="rounded-circle m-0" onclick="deleteTodo(${projectIndex}, ${index})"><i class="bi bi-trash3"></i></p>
    `

    todoListElement.appendChild(todoItem)
    const titleDiv = document.getElementById(`todo-${projectIndex}-${index}`)
    titleDiv.setAttribute('data-bs-toggle', "modal")
    titleDiv.setAttribute('data-bs-target', "#expanded-todo-modal")
    titleDiv.addEventListener('click', () => expandModal(todo, index))
  }

  // Function to toggle the checklist state
  window.toggleChecklist = function (todoIndex) {
    const projectIndex = domModule.getSelectedProjectIndex()
    const projects = Project.loadProjects()
    const project = projects[projectIndex]

    // Check if the project and its todos array exist
    if (project && project.todos) {
      const todo = project.todos[todoIndex];
  
      // Check if the todo object exists
      if (todo) {
        projects[projectIndex].todos[todoIndex].toggleCheckedItem()
        Project.saveProjects(projects)
        displayTodos()
      } else {
        console.error(`Todo at index ${todoIndex} not found in project.`)
      }
    } else {
      console.error(`Project at index ${projectIndex} or its todos array not found.`)
    }
  }
  
  // Function to handle the deletion of a todo
  window.deleteTodo = function (projectIndex, todoIndex) {
    const confirmation = window.confirm("Are you sure you want to delete this to-do?")
    const projects = Project.loadProjects()
    const project = projects[projectIndex]

    if (project && confirmation) {
      project.todos = project.todos.filter((todo, index) => index !== todoIndex)
      Project.saveProjects(projects)
      displayTodos()
    }
  }
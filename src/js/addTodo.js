import Project from './project'
import Todo from './todo'
import domModule from './dom'
import displayTodos from './todoElement'

const expandedTodoTitle = document.getElementById('expanded-todo-title')
const modalBody = document.getElementById('modal-body')

export default function addTodoToProject() {
    expandedTodoTitle.textContent = 'Add a to-do'
    modalBody.innerHTML = `
        <div class="mb-3">
            <label for="addTodoTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="addTodoTitle" placeholder="Study">
        </div>
        <div class="mb-3">
            <label for="addTodoDescription" class="form-label">Description</label>
            <textarea class="form-control" id="addTodoDescription" rows="2"></textarea>
        </div>
        <div class="mb-3">
            <label for="addTodoDueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="addTodoDueDate">
        </div>
        <div class="mb-3">
            <label for="addTodoPriority" class="form-label">Priority (No Priority/Low/Medium/High)</label>
            <input type="range" class="form-range" value="-1" min="-1" max="2" id="addTodoPriority">
        </div>
        <div class="mb-3">
            <button onclick="saveAdd()" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
        </div>
    `
}

// Function to save the added todo
window.saveAdd = function () {
    const todoTitle = document.getElementById('addTodoTitle').value
    const todoDescription = document.getElementById('addTodoDescription').value
    const todoDueDate = document.getElementById('addTodoDueDate').value
    const todoPriority = document.getElementById('addTodoPriority').value
    if (todoTitle && todoDescription && todoPriority) {
        const projects = Project.loadProjects()
        projects[domModule.getSelectedProjectIndex()].addTodo(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, false))
        Project.saveProjects(projects)
        displayTodos()
    }
}
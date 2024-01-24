import Project from './project'
import domModule from './dom'
import displayTodos from './todoElement'

const expandedTodoTitle = document.getElementById('expanded-todo-title')
const modalBody = document.getElementById('modal-body')

export default function editTodoToProject(todo, todoIndex) {
    expandedTodoTitle.textContent = `Edit: ${todo.title}`
    modalBody.innerHTML = `
        <div class="mb-3">
            <label for="addTodoTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="addTodoTitle" placeholder="Study" value="${todo.title}">
        </div>
        <div class="mb-3">
            <label for="addTodoDescription" class="form-label">Description</label>
            <textarea class="form-control" id="addTodoDescription" rows="2">${todo.description}</textarea>
        </div>
        <div class="mb-3">
            <label for="addTodoDueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="addTodoDueDate" value="${todo.dueDate}">
        </div>
        <div class="mb-3">
            <label for="addTodoPriority" class="form-label">Priority (No Priority/Low/Medium/High)</label>
            <input type="range" class="form-range" value="${todo.priority}" min="-1" max="2" id="addTodoPriority">
        </div>
        <div class="mb-3">
            <button onclick="saveEdit(${todoIndex})" class="btn btn-primary" data-bs-dismiss="modal">Edit</button>
        </div>
    `
}

// Function to save the edited todo
window.saveEdit = function (todoIndex) {
    const newTitle = document.getElementById('addTodoTitle').value
    const newDescription = document.getElementById('addTodoDescription').value
    const newDueDate = document.getElementById('addTodoDueDate').value
    const newPriority = document.getElementById('addTodoPriority').value

    if (newTitle && newDescription && newPriority) {
        const projects = Project.loadProjects()
        const projectIndex = domModule.getSelectedProjectIndex();

        projects[projectIndex].todos[todoIndex].setTitle(newTitle)
        projects[projectIndex].todos[todoIndex].setDescription(newDescription)
        projects[projectIndex].todos[todoIndex].setDueDate(newDueDate)
        projects[projectIndex].todos[todoIndex].setPriority(newPriority)
        Project.saveProjects(projects)
        displayTodos()
    }
}
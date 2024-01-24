import editTodoToProject from "./editTodo"

const expandedTodoTitle = document.getElementById('expanded-todo-title')
const modalBody = document.getElementById('modal-body')
const modalContent = document.querySelector('.modal-content')

export default function expandModal(todo, index) {
    // Display the modal with todo details
      let priorityCategory = ''
      switch (todo.priority) {
        case '2':
          priorityCategory = 'High Priority'
          modalContent.className = 'modal-content bg-danger-subtle'
          break;
        case '1':
          priorityCategory = 'Medium Priority'
          modalContent.className = 'modal-content bg-warning-subtle'
          break;
        case '0':
          priorityCategory = 'Low Priority'
          modalContent.className = 'modal-content bg-success-subtle'
          break;
        default:
          priorityCategory = 'No Priority Level'
          modalContent.className = 'modal-content'
          break;
      }
    expandedTodoTitle.textContent = todo.title
    modalBody.innerHTML = `
      <h4>${todo.description}</h4>
      <h5>${todo.dueDate ? `Due Date: ${todo.dueDate}` : 'No Due Date'}</h5>
      <h6>${priorityCategory}</h6>
      <div class="my-3">
          <button id="editTodoBtn" class="btn btn-primary">Edit</button>
      </div>
    `
    const editTodoBtn = document.getElementById('editTodoBtn')
    editTodoBtn.addEventListener('click', () => editTodoToProject(todo, index))
  }
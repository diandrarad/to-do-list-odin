import Project from './project'
import domModule from './dom'
import displayTodos from './todoElement'

const projectListElement = document.getElementById('project-list')

export default function projectItem(project, index) {
    const projectItem = document.createElement('li')
    projectItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    projectItem.style.overflow = 'hidden'
    projectItem.role = 'button'

    const projectH6 = document.createElement('h6')
    projectH6.textContent = project.name;

    const controlIcons = document.createElement('div')
    controlIcons.className = 'd-flex'

    const editBtn = document.createElement('i')
    editBtn.className = 'bi bi-pen me-2'

    const editInput = document.createElement('input')
    editInput.value = projectH6.innerText
    editInput.style.padding = '2px'
    editInput.style.fontSize = '16px'
    editInput.style.fontWeight = '500'
    editInput.style.outline = 'none'
    editInput.style.border = 'none'

    editBtn.addEventListener('click', () => {
        projectItem.replaceChild(editInput, projectH6)
        editInput.focus()

        // Attach a blur event listener to handle the replacement when focus is lost
        editInput.addEventListener('blur', () => {
        projectH6.innerText = projectItem.querySelector('input').value
        projectItem.replaceChild(projectH6, projectItem.querySelector('input'))
        displayProjects()
        })

        // Attach a keydown event listener to handle the replacement when Enter key is pressed
        editInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const projects = Project.loadProjects()
            projects[index].setName(projectItem.querySelector('input').value)
            Project.saveProjects(projects)
            projectItem.replaceChild(projectH6, projectItem.querySelector('input'))
            displayProjects()
        }
        })

        // Add an event listener to handle clicks outside the edit area
        document.addEventListener('click', handleDocumentClick)
    })

    // Event listener for clicks outside the li element
    document.addEventListener('click', (event) => {
        if (projectItem.querySelector('input') && !projectItem.contains(event.target)) {
            projectH6.textContent = projectItem.querySelector('input').value
            projectItem.replaceChild(projectH6, projectItem.querySelector('input'))
            domModule.displayProjects()
        }
    })

    function handleDocumentClick(e) {
        if (!e.target.closest(e.target)) {
            projectItem.replaceChild(projectH6, editInput)
            document.removeEventListener('click', handleDocumentClick)
        }
    }

    const deleteBtn = document.createElement('i')
    deleteBtn.className = 'bi bi-trash3'
    deleteBtn.addEventListener('click', () => deleteProject(index))

    // Add event listener to display todos when clicking on a project
    projectItem.addEventListener('click', (e) => {
        if (e.target !== editBtn && e.target !== deleteBtn) {
            domModule.setSelectedProject(index)
            displayTodos()
            markProjectAsActive()
        }
    })

    controlIcons.appendChild(editBtn)
    controlIcons.appendChild(deleteBtn)
    projectItem.appendChild(projectH6)
    projectItem.appendChild(controlIcons)
    projectListElement.appendChild(projectItem)
}

// Function to delete a project
function deleteProject(projectIndex) {
  const confirmation = window.confirm("Are you sure you want to delete this project?")
  
  const projects = Project.loadProjects()
  if (confirmation && projects[projectIndex]) {
    Project.saveProjects(projects.filter((_, index) => index !== projectIndex))
    if (projectIndex - 1 > 0) domModule.setSelectedProject(projectIndex - 1)
    else domModule.setSelectedProject(0)
    domModule.displayProjects()
  }
}

// Function to mark the selected project as active
export function markProjectAsActive() {
  const projectItems = projectListElement.children;

  for (let i = 0; i < projectItems.length; i++) {
    if (i === domModule.getSelectedProjectIndex()) {
      // Add a class to mark as active
      projectItems[i].classList.add('border', 'border-success-subtle')
      projectItems[i].setAttribute('aria-current', 'true')
    } else {
      // Remove the class from other projects
      projectItems[i].classList.remove('border', 'border-success-subtle')
      projectItems[i].removeAttribute('aria-current')
    }
  }
}
// dom.js
import Project from './project'
import displayTodos from './todoElement'
import projectItem from './projectItem'

const domModule = (function () {
    const projects = Project.loadProjects()
    const projectListElement = document.getElementById('project-list')

    let selectedProjectIndex = 0
  
    function displayProjects() {
      // Clear the project list before updating
      projectListElement.innerHTML = ''
      const projects = Project.loadProjects()
      const projectCount = projects.length
  
      if (projectCount === 0) {
        const placeholderItem = document.createElement('div');
        placeholderItem.className = 'p-5 text-center align-self-center border-0 fs-2';
        placeholderItem.textContent = 'No projects available. Create a new project!';
        projectListElement.appendChild(placeholderItem)
      }

      projects.forEach((project, index) => projectItem(project, index))

      if (projectCount >= 0) {
        if (projectCount === 1) setSelectedProject(0)
        displayTodos()
      } else setSelectedProject(null)
    }

    function setSelectedProject(index) {
      selectedProjectIndex = index
    }

    function addProject() {
      const projectName = prompt('Enter project name:')
  
      if (projectName) {
        const newProject = new Project(projectName)
        projects.push(newProject)
        Project.saveProjects(projects)
        displayProjects()
      }
    }
  
    // Return public functions
    return {
      displayProjects,
      addProject,
      getSelectedProjectIndex: () => selectedProjectIndex,
      setSelectedProject
    }
  })()
  
export default domModule
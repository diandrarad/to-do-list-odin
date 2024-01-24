// index.js
import '../css/style.css'
import Project from './project'
import Todo from './todo'
import domModule from './dom'
import { markProjectAsActive } from './projectItem'

document.addEventListener('DOMContentLoaded', () => {
  // Load projects from localStorage
  const projects = Project.loadProjects()

  // Check if the default projects flag is not set
  const defaultProjectsFlag = localStorage.getItem('defaultProjectsFlag');

  if (projects.length === 0 && !defaultProjectsFlag) {
    const defaultProject1 = new Project('Launch Website (Example Project)')
    defaultProject1.addTodo(new Todo('Design Homepage', 'Create wireframes and design concepts for the homepage.', '2024-03-15', '2', true))
    defaultProject1.addTodo(new Todo('Implement Responsive Layout', 'Write CSS and implement a responsive layout for the entire website.', '2024-03-20', '1', false))
    defaultProject1.addTodo(new Todo('Set Up Database', 'Configure the database schema and set up necessary tables for user data.', '2024-03-25', '2', false))
    defaultProject1.addTodo(new Todo('Implement User Authentication', 'Develop user authentication system with email verification.', '2024-03-30', '2', true))
    
    const defaultProject2 = new Project('Marketing Campaign (Example Project)')
    defaultProject2.addTodo(new Todo('Create Social Media Calendar', 'Plan and create a calendar for social media posts over the next month.', '2024-03-10', '1', true))
    defaultProject2.addTodo(new Todo('Design Campaign Graphics', 'Design graphics and visuals for the marketing campaign.', '2024-03-15', '2', false))
    defaultProject2.addTodo(new Todo('Write Blog Posts', 'Write engaging blog posts related to the campaign theme.', '2024-03-20', '1', false))
    defaultProject2.addTodo(new Todo('Launch Email Campaign', 'Prepare and send out email newsletters to subscribers.', '2024-03-25', '2', true))
    
    const defaultProject3 = new Project('Research and Development (Example Project)')
    defaultProject3.addTodo(new Todo('Market Research', 'Conduct market research to identify trends and competitors.', '2024-03-10', '2', true))
    defaultProject3.addTodo(new Todo('Prototype New Feature', 'Develop a prototype for a new feature based on user feedback.', '2024-03-15', '1', false))
    defaultProject3.addTodo(new Todo('Code Refactoring', 'Perform code refactoring for improved performance and maintainability.', '2024-03-20', '2', false))
    defaultProject3.addTodo(new Todo('Test and QA', 'Conduct thorough testing and quality assurance on the latest release.', '2024-03-25', '2', true))
    
    projects.push(defaultProject1)
    projects.push(defaultProject2)
    projects.push(defaultProject3)

    // Save projects to localStorage
    Project.saveProjects(projects)

    // Set the default projects flag to indicate that they have been created
    localStorage.setItem('defaultProjectsFlag', 'true');
  }

  // Initialize your app with the loaded projects
  domModule.displayProjects()
  markProjectAsActive()

  // Add event listener to the "Add Project" button
  const addProjectBtn = document.getElementById('add-project-btn')
  addProjectBtn.addEventListener('click', domModule.addProject)
})

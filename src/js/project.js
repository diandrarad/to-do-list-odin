// project.js
import Todo from './todo'

export default class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }

    setName(newName) {
      this.name = newName
    }
  
    static loadProjects() {
      const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      const projects = storedProjects.map((projectData) => {
        const project = new Project(projectData.name);
        // Revive todos with Todo class
        project.reviveTodos(projectData.todos);
        return project;
      });
      return projects;
    }
  
    static saveProjects(projects) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  
    // Revive todos with Todo class methods
    reviveTodos(todoData) {
      this.todos = todoData.map((todo) => new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.checked));
    }
  }
  
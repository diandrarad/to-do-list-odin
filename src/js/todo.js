// todo.js
export default class Todo {
    constructor(title, description, dueDate, priority, checked=false) {
      this.title = title
      this.description = description
      this.dueDate = dueDate
      this.priority = priority
      this.checked = checked
    }

    // Method to toggle a checked item
    toggleCheckedItem() {
      this.checked = !this.checked
    }

    setTitle(newTitle) {
      this.title = newTitle
    }

    setDescription(newDescription) {
      this.description = newDescription
    }

    setDueDate(newDueDate) {
      this.dueDate = newDueDate
    }

    setPriority(newPriority) {
      this.priority = newPriority
    }
  }
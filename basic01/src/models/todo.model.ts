class Todo {
  id;
  todo;
  completed;

  constructor(todo: string, id = Date.now().toString(), completed = false) {
    this.id = id.toString();
    this.todo = todo;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

export class TodoList {
  private todoList: Todo[];

  constructor() {
    this.todoList = [];
  }

  getAllItem() {
    console.log(this.todoList);
    return this.todoList;
  }
  createItem(todo: string) {
    const todoItem = new Todo(todo);
    this.todoList.push(todoItem);
    return todoItem;
  }
  getItem(id: string): Todo | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }
  removeItem(id: string): Todo | boolean {
    const todoList = [...this.todoList];
    const idx = todoList.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
      const removedItem = todoList.splice(idx, 1);
      this.todoList = todoList;
      return removedItem[0];
    }
    return false;
  }
  updateItem(id: string, updateTodo: string): boolean {
    let updated = false;
    const newTodoList = this.todoList.map((todoItem) => {
      if (todoItem.id === id) {
        updated = true;
        return new Todo(updateTodo, todoItem.id, todoItem.completed);
      }
      return todoItem;
    });

    this.todoList = newTodoList;
    return updated;
  }

  toggle(id: string): boolean {
    const findItem = this.getItem(id);
    if (!findItem) return false;
    findItem.toggle();
    return true;
  }
}

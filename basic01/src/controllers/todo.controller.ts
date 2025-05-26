import { NextFunction, Request, Response } from 'express';
import { TodoList } from './../models/todo.model';

export class TodoController {
  todos;
  constructor() {
    this.todos = new TodoList();
  }

  getAllItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = this.todos.getAllItem();
      if (!todos || todos.length < 1)
        throw new Error('Todos가 존재하지 않습니다.');
      res.json({ todos });
    } catch (err) {
      next(err);
    }
  };

  getTodoItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const findItem = this.todos.getItem(id);
      if (!findItem) throw new Error('해당 ID의 Todo가 존재하지 않습니다.');
      res.json({ todo: findItem });
    } catch (err) {
      next(err);
    }
  };

  createItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { todo } = req.body;
      const todoItem = this.todos.createItem(todo);
      res.json({ todo: todoItem });
    } catch (err) {
      next(err);
    }
  };

  toggle = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const findItem = this.todos.getItem(id);
      if (!findItem) throw new Error('해당 ID의 Todo가 존재하지 않습니다.');
      findItem.toggle();
      res.json({ message: '변경 성공!' });
    } catch (err) {
      next(err);
    }
  };

  removeItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const item = this.todos.removeItem(id);
      if (!item) throw new Error('삭제 실패!');
      res.json({ item });
    } catch (err) {
      next(err);
    }
  };

  updateItem = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { todo, id } = req.body;
      const item = this.todos.updateItem(id, todo);
      res.json({ item });
    } catch (err) {
      next(err);
    }
  };
}

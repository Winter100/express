import { Router } from 'express';
import { TodoController } from '../controllers/todo.controller';

const router = Router();

const todoController = new TodoController();

router.get('/', todoController.getAllItem);
router.get('/:id', todoController.getTodoItem);
router.post('/create', todoController.createItem);
router.put('/update', todoController.updateItem);
router.delete('/delete/:id', todoController.removeItem);
router.put('/toggle/:id', todoController.toggle);

export default router;

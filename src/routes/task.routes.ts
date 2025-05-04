// Définition des routes
import { Router } from 'express';
import {
  fetchTasks,
  createTask,
  getTask,
  editTask,
  removeTask
} from '../controllers/task.controller';

const router = Router();

router.get('/', fetchTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', editTask);
router.delete('/:id', removeTask)

export default router;

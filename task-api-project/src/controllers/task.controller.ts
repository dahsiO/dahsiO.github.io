// Contrôleur des tâches
import { Request, Response } from 'express';
import {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
  } from '../services/task.service';

export const fetchTasks = (req: Request, res: Response) => {
  const tasks = getAllTasks();
  res.json(tasks);
};


export const createTask = (req: Request, res: Response) => {
    const { title, description, isDone } = req.body;
  
    if (!title || !description || typeof isDone !== 'boolean') {
      return res.status(400).json({ error: "Champs invalides" });
    }
  
    const newTask = addTask({ title, description, isDone });
    res.status(201).json(newTask);
  };
  export const getTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const task = getTaskById(id);
  
    if (!task) {
      return res.status(404).json({ error: "Tâche non trouvée" });
    }
  
    res.json(task);
  };
  
  export const editTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updated = req.body;
  
    const task = updateTask(id, updated);
  
    if (!task) {
      return res.status(404).json({ error: "Tâche non trouvée" });
    }
  
    res.json(task);
  };
  
  export const removeTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
  
    const success = deleteTask(id);
  
    if (!success) {
      return res.status(404).json({ error: "Tâche non trouvée" });
    }
  
    res.status(204).send(); // 204 = No Content
  };
  
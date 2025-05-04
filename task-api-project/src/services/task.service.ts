import { Task } from '../models/task.model';

let tasks: Task[] = [
  { id: 1, title: "Réviser TS", description: "Refaire les exos du cours", isDone: false },
  { id: 2, title: "Coder l’API", description: "Créer routes et services", isDone: true }
];

export const getAllTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined =>
  tasks.find(task => task.id === id);

export const addTask = (task: Omit<Task, 'id'>): Task => {
  const newTask: Task = { id: tasks.length + 1, ...task };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (id: number, updated: Partial<Task>): Task | null => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;

  tasks[index] = { ...tasks[index], ...updated };
  return tasks[index];
};

export const deleteTask = (id: number): boolean => {
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  return tasks.length < initialLength;
};

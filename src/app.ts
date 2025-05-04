// App principal Express
import path from 'path';
import express from 'express';
import taskRoutes from './routes/task.routes';
import logger from './middlewares/logger.middleware';

const app = express();
app.use(express.json());
app.use(logger);
app.use('/tasks', taskRoutes);



app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API des tâches !");
});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
export default app;

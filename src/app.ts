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


// Route pour les tâches
app.use('/tasks', taskRoutes); // <-- ici on "branche" ton routeur
// ⬇️ Très important : servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));


export default app;

// Fichier de démarrage du serveur
import app from "./app";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

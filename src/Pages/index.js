const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (PDF, images, css, js, etc.)
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/documents', express.static(path.join(__dirname, 'public/documents')));

// Servir les fichiers statiques du frontend React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Pour any route, retourner index.html pour React Router SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
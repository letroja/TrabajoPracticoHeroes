const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'DH-Heroes/views');

app.get('/home', (req,res) => res.sendFile(path.join(views, 'index.html')));
app.get('/capitan-america', (req,res) => res.sendFile(path.join(views, 'capitan-america.html')));
app.get('/loki', (req,res) => res.sendFile(path.join(views, 'loki.html')));
app.get('/hulk', (req,res) => res.sendFile(path.join(views, 'hulk.html')));
app.get('/scarlet-witch', (req,res) => res.sendFile(path.join(views, 'scarlet-witch.html')));
app.get('/spiderman', (req,res) => res.sendFile(path.join(views, 'spiderman.html')));
app.get('/thor', (req,res) => res.sendFile(path.join(views, 'thor.html')));
app.get('/ironman', (req,res) => res.sendFile(path.join(views, 'ironman.html')));

app.use(express.static('DH-Heroes/public'));

app.listen(port, () => console.log( 'Servidor corriendo en el puerto ' + port));
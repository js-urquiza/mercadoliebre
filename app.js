const PORT = 3000;

const express = require('express');
const app = express();

const path = require('path');

app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto ' + PORT);
});

app.use(express.static(path.join(__dirname, 'public'))); // Declara la carpeta "public" como "pública", por tanto todo lo que siga de "/" son subcarpetas de "public".

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
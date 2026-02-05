const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/ButterChicken', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/ButterChicken.html'));
});

app.get('/TikkaMasala', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/TikkaMasala.html'));
});

app.get('/Bayia', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/Bayia.html'));
});

app.get('/TandooriChicken', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/TandooriChicken.html'));
});

app.get('/KormaCurry', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/KormaCurry.html'));
});

app.get('/Biryani', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/Biryani.html'));
});

app.get('/PaniPuri', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/PaniPuri.html'));
});

app.get('/Samisas', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/Samisas.html'));
});

app.get('/Japati', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/Japati.html'));
});

app.get('/Naan', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/Naan.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})
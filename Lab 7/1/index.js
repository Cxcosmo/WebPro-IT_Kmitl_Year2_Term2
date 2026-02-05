const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/Operaters', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/character.html'));
});

app.get('/Weapons', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/weapons.html'));
});

app.get('/Gear', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/gear.html'));
});

app.get('/Item', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/item.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})
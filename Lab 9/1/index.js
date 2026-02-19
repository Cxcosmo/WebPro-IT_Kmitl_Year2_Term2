const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('userdata.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the userdata database.');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  const query = 'SELECT * FROM users';
  db.all(query, (err, result) => {
    if (err) {
      console.log(err.message);
    }
    console.log(result);
    res.render('index', { users : result });
  });
});

app.get('/detail', function (req, res) {
    const id = req.query.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.get(query, [id], (err, result) => {
        if (err) {
            console.log(err.message);
        }
        console.log(result);
        res.render('detail', { user : result });
    });
});

app.listen(port, () => {
    console.log("Server started.");
});
const { count } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('storeLog.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const query = 'SELECT * FROM statusLog';
    db.all(query, (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('index', { data: rows });
    });
});

app.post('/add', function (req, res) {
    const data = req.body;
    const query = 'INSERT INTO statusLog (name, product, address, phone, status) VALUES (?, ?, ?, ?, ?)';
    db.run(query, [data.name, data.product, data.address, data.phone, "รอดำเนินการ"], function(err) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
});

app.post('/update', function (req, res) {
    const data = req.body;
    const query = 'UPDATE statusLog SET status = ? WHERE id = ?';
    db.run(query, [data.status, data.id], function(err) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log("Server started.");
});
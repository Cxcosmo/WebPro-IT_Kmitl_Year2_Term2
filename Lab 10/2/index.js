const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const todo_data = 'http://localhost:3000/todo_data';

let db = new sqlite3.Database('todo_List.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.get('/', (req, res) => {
    fetch(todo_data)
    .then(response => response.json())
    .then(data => {
        res.render('index', { todos: data });
    })
    .catch(error => {
        console.error('Error :', error);
        res.status(500).send('Error: 500');
    })
})

app.get('/todo_data', (req, res) => {
    db.all('SELECT * FROM todo_table', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error: 500');
        } else {
            res.json(rows);
        }
    });
});

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/create.html'));
});

app.post('/add', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO todo_table (title, deadline, status) VALUES (?, ?, ?)';
    db.run(query, [data.title, data.deadline, 0], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error: 500');
        } else {
            res.redirect('/');
        }
    });
});

app.post('/update', (req, res) => {
    const { id, completed } = req.body;
    const query = 'UPDATE todo_table SET status = ? WHERE id = ?';
    db.run(query, [completed, id], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Database error' });
        }

        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
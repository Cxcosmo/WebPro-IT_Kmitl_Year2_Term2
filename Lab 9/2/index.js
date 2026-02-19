const { count } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('questions.db', (err) => {
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
    const query = 'SELECT * FROM questions';
    db.all(query, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        res.render('index', { questions: result });
    });
});

app.post('/submit', (req, res) => {
    const answers = req.body;

    db.all('SELECT QID, Correct FROM questions', (err, rows) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send("Internal Server Error");
        }

        let correct_count = 0;

        rows.forEach(row => {
            const userAnswer = answers[`q_${row.QID}`];
            if (userAnswer && userAnswer === row.Correct) {
                correct_count++;
            }
        });

        res.render('score', { score: correct_count });
    });
});

app.listen(port, () => {
    console.log("Server started.");
});
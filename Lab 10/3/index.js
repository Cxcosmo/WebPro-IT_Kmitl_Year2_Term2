const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('server is connected');
})

let books = 'http://webdev.it.kmitl.ac.th:4000/books';

app.get('/', (req, res) => {
    fetch(books)
        .then(response => response.json())
        .then(data => {
            res.render('index', { books: data });
        })
        .catch(error => {
            console.error('Error books:', error);
            res.status(500).send('Error books');
        });
});
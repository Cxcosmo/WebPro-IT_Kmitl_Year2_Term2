const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.set('view engine', 'ejs');

const menu = 'http://webdev.it.kmitl.ac.th:4000/restaurant';
const detail = 'http://webdev.it.kmitl.ac.th:4000/detail';

app.listen(port, () => {
    console.log("Server started.");
});

app.get('/', (req, res) => {
    fetch(menu)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.render('index', { menu: data });
    })
    .catch(error => {
        console.error('Error menu:', error);
        res.status(500).send('Error menu');
    });
});

app.get('/detail/:product_id', (req, res) => {
    const productId = req.params.product_id;
    fetch(`${detail}/${productId}`)
    .then(response => response.json())
    .then(data => {
        res.render('detail', { product: data });
    })
    .catch(error => {
        console.error('Error product:', error);
        res.status(500).send('Error product');
    });
});
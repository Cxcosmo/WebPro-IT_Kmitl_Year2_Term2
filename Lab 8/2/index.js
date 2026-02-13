const express = require('express');
const app = express();
const port = 3000;
const  path =  require('path');
const conn = require('./database');

app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signIn.html'))
});

app.get('/formGet', (req, res) => {
    const { user, password } = req.query;
    const sql = `SELECT * FROM usersData WHERE username = ? OR email = ?`;
    conn.query(sql, [user, user], (err, result) => {
        if (err) throw err;

        console.log("show users", result);

        if (result.length === 0) {
            res.redirect('/user_not_found');
        } else if (result[0].password !== password) {
            res.redirect('/incorrect');
        } else {
            res.redirect('/profile?' + new URLSearchParams({ user: JSON.stringify(result[0]) }));
        }
    });
});

app.get('/user_not_found', (req, res) => {
    res.render('fail', { message: "User not found" });
});

app.get('/incorrect', (req, res) => {
    res.render('fail', { message: "Incorrect password" });
});

app.get('/profile', (req, res) => {
    res.render('profile', { user: JSON.parse(req.query.user) });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
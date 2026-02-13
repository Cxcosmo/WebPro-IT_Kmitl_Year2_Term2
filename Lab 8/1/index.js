const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const conn = require('./database');

app.get('/', (req, res) => {
    const sql = `CREATE TABLE IF NOT EXISTS usersData (
            id INT PRIMARY KEY,
            username VARCHAR(50),
            password VARCHAR(100),
            email VARCHAR(100),
            firstname VARCHAR(100),
            lastname VARCHAR(100),
            age INT,
            address VARCHAR(255),
            phone VARCHAR(15)
        )`;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table created or already exists");
    });

    const Insert_sql = `INSERT IGNORE INTO usersData (id, username, password, email, firstname, lastname, age, address, phone)  
        VALUES (1, 'user1', 'pass1', 'user1@gmail.com', 'User', 'One', 25, '69/140 Nonthaburi', '0812345678'),
        (2, 'user2', 'pass2', 'user2@gmail.com', 'User', 'Two', 30, '69/141 Nonthaburi', '0812345679'),
        (3, 'user3', 'pass3', 'user3@gmail.com', 'User', 'Three', 35, '69/142 Nonthaburi', '0812345680'),
        (4, 'user4', 'pass4', 'user4@gmail.com', 'User', 'Four', 40, '69/143 Nonthaburi', '0812345681'),
        (5, 'user5', 'pass5', 'user5@gmail.com', 'User', 'Five', 45, '69/144 Nonthaburi', '0812345682')`;
    conn.query(Insert_sql, (err, result) => {
        if (err) throw err;
        console.log("Inserted  5 Users");
    });

    const select_sql = `SELECT * FROM usersData`;
    conn.query(select_sql, (err, result) => {
        if (err) throw err;
        console.log("show users", result);
        res.render('index', { users: result });
    });
});

app.use(express.static('css'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
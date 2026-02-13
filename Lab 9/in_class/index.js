const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

const app = express();

let db = new sqlite3.Database('employee2.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

const sql  = ` CREATE TABLE employees (
    EmployeeId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    LastName NVARCHAR(20)  NOT NULL,
    FirstName NVARCHAR(20)  NOT NULL,
    Title NVARCHAR(30),
    Phone NVARCHAR(24),
    Email NVARCHAR(60) ); `; 

db.run(sql, (err) => { 
    if (err) { 
        return console.error('Error creating table:', err.message); 
    } 
    console.log('Table created successful'); 
});

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/create', (req, res) => {
    let sql =` SQL command `;    
        
})

app.use(express.static('public'));
app.use(express.static('css'));
app.set('view engine', 'ejs');

app.listen(port, () => {
   console.log("Server started.");
 });
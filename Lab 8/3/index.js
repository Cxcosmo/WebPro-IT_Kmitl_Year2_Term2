const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const conn = require('./database');

app.use(express.static('css'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    const create_sql = `CREATE TABLE IF NOT EXISTS albums (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) UNIQUE,
                artist VARCHAR(255),
                album VARCHAR(255),
                year INT,
                genre VARCHAR(100),
                image VARCHAR(255)
            )`;

    conn.query(create_sql, (err) => {
        if (err) throw err;

        const insert_sql = `INSERT IGNORE INTO albums (title, artist, album, year, genre, image) VALUES
            ('Shape of You', 'Ed Sheeran', 'Divide', 2017, 'Pop', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/shape-of-you.png'),
            ('Blinding Lights', 'The Weeknd', 'After Hours', 2019, 'Synthpop', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/blinding-lights.png'),
            ('Rolling in the Deep', 'Adele', '21', 2010, 'Soul', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/rolling-in-the-deep.jpg'),
            ('Uptown Funk', 'Mark Ronson ft. Bruno Mars', 'Uptown Special', 2014, 'Funk', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/uptown-funk.jpg'),
            ('Bad Guy', 'Billie Eilish', 'When We All Fall Asleep, Where Do We Go?', 2019, 'Electropop', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/bad-guy.jpg'),
            ('Radioactive', 'Imagine Dragons', 'Night Visions', 2012, 'Alternative Rock', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/radioactive.png'),
            ('Someone Like You', 'Adele', '21', 2011, 'Ballad', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/someone-like-you.png'),
            ('Happy', 'Pharrell Williams', 'G I R L', 2013, 'Pop', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/pharrell-williams-happy.jpg'),
            ('Lose Yourself', 'Eminem', '8 Mile Soundtrack', 2002, 'Hip Hop', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/lose-yourself.jpg'),
            ('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', 1991, 'Grunge', 'http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/Smells-Like-Teen-Spirit.jpg')`;

        conn.query(insert_sql, (err) => {
            if (err) throw err;

            const select_sql = "SELECT * FROM albums";

            conn.query(select_sql, (err, result) => {
                if (err) throw err;
                console.log("show albums", result);
                res.render('index', { albums: result });
            });
        });
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
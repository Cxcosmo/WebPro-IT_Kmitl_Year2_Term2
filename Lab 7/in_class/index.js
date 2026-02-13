const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use(express.static('public'));
// app.use(express.static('files'));
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/submitform', (req, res) => {
  const { fname, lname } = req.query;
  res.send(`First name: ${fname}, Last name: ${lname}`);
});

// app.get('/', function(req, res){
//     let html = `<h1>Welcome</h1>
//     <ul>
//         <li><a href="hello">Hello</a></li>
//     </ul>`;

//   res.sendfile(html);
// });

app.get('/form', function(req, res){
  res.sendFile(path.join(__dirname, '/public/form.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, press Ctrl-C to terminate....`)
})
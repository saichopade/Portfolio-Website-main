const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: 'Pass@123', // your MySQL password
    database: 'contact_form'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;

    const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, subject, message], (err, result) => {
        if (err) throw err;
        res.redirect('https://portfolio-website-main-ly29l4l9f-saichopades-projects.vercel.app/#contact'); // Redirect to the contact section
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



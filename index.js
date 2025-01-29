const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://willy-dev:njC6jZmtGwpgBbME@cluster0.2ppoz.mongodb.net/userlogin?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
} )

mongoose.connect(DB).then(() => {
    console.log('connected to the database...')
}).catch((err) => {
    console.log(err);
})

// there was just an error because  of password

var username;
var password;
app.post('/', (req, res) => {
    
    username = req.body.email;
    password = req.body.password;

    console.log(username + ' ' + password)

    res.redirect('/');
})

app.listen(process.env.Port  || 3000, (err, result) => {
    console.log('running the server.....')
})

// mongodb+srv://willy-dev:<db_password>@cluster0.2ppoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const DB = 'mongodb+srv://Your Name:<db_password>@cluster0.2ppoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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

mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
    username: String,
    password: String 
});

const User = mongoose.model('users', userSchema);

var Username;
var Password;
app.post('/', (req, res) => {
    
    Username = req.body.email;
    Password = req.body.password;

    console.log(Username + ' ' + Password)

    const user = new User({
        username: Username,
        password: Password
    })

    user.save();

    res.redirect('/');
})

app.listen(process.env.Port  || 3000, (err, result) => {
    console.log('running the server.....')
})

// your URI should look like  the above one. Enter username  and password  correctly  otherwise you will get the same  error.
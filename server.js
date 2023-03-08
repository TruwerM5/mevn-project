const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port = 3033;
const config = require('./config');
const handlers = require('./middleware/handlers');
const cors = require('cors');
const app = express();

app.use('/api/', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, '/public/dist')));
app.use('/bookshop/', express.static(path.join(__dirname, '/public/dist')));
app.get('/', (req, res) => {
    res.redirect('/bookshop/');
})

app.get('/api/users', handlers.getUsersApi);

app.get('/api/vacations',  handlers.getVacationsApi);
app.post('/api/signup', handlers.signup);
app.post('/api/login', handlers.login);
app.post('/api/deleteUser', handlers.deleteUserApi)

app.post('/api/auth', handlers.auth);

app.use((err, req, res, next) => {
    if(err) {
        console.log(err);
        res.send('Server Error');
    }
});
app.use((req, res) => {
    res.send('404 Not Found')
});





app.listen(port);
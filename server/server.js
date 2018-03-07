const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , port = 4000
    , session = require('express-session')
    , controller = require('./controllers/controller')
    , CheckForSession = require('../middleware/CheckForSession')
    , path = require('path')
    app = express();



require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true
}))
// sim1: 74E
app.use( express.static( `${__dirname}/../build` ) );
app.use(CheckForSession);

//AUTHORIZATION 
// sim1: 76C
app.post('/api/auth/login', controller.login);
app.post('/api/auth/register', controller.register);
app.get('/api/getUsers', controller.getUsers);
app.post('/api/addUser', controller.addUser);
// sim1: 74D-4
app.delete('/api/deleteUser/:username', controller.deleteUser);
// sim1: 74D-2
app.put('/api/changeUser', controller.changeUser);
app.get('/api/getUser', controller.getUser);


massive (process.env.CONNECTION_STRING).then(db=> {
    app.set('db', db);
    app.listen(port, ()=>console.log('Big Brother is listening on port 4000'));
})



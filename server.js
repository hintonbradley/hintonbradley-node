var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();

app.use('/app', express.static(path.join(__dirname, 'app')))
app.use('/nm', express.static(path.join(__dirname, 'node_modules')))

app.get('/resume', function (req, res) {
    res.send('Welcome to your server! It is good.');
})

app.get('/', (req, res) => {
    console.log('Server is listening');
    res.sendFile(__dirname + '/app/views/home.html', { title: 'Hey', message: 'Hello there!' });
});

app.listen(process.env.PORT || 3000), function () {
console.log("SERVER RUNNING");
};
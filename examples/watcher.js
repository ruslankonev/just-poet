const express = require('express');
const app = express();
const Poet = require('../lib/poet')(app);

Poet.watch(function() {
    // watcher reloaded
}).init().then(function() {
    // Ready to go!
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { res.render('index'); });

app.listen(3000);
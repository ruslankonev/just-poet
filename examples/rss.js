const express = require('express');
const app = express();
const Poet = require('../lib/poet')(app);

Poet.init().then(function() {
    // initialized
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(app.router);

app.get('/', function(req, res) { res.render('index'); });

app.get('/rss', function(req, res) {
    // Only get the latest posts
    var posts = poet.helpers.getPosts(0, 5);
    res.setHeader('Content-Type', 'application/rss+xml');
    res.render('rss', { posts: posts });
});

app.listen(3000);
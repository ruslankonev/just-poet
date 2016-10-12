const express = require('express');
const app = express();
const Poet = require('../lib/poet')(app);

Poet.init().then(function() {
    // initialized
});

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { res.render('index'); });

app.get('/sitemap.xml', function(req, res) {
    // Only get the latest posts
    var postCount = poet.helpers.getPostCount();
    var posts = poet.helpers.getPosts(0, postCount);
    res.setHeader('Content-Type', 'application/xml');
    res.render('sitemap', { posts: posts });
});

app.listen(3000);
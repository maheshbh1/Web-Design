let express = require('express');
let { create }  = require('express-handlebars');

let app = express();

app.engine('handlebars', create({ extname: 'handlebars', defaultLayout: '', layoutsDir: 'views' }).engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/blog-1', function(req, res) {  
    res.render('blog-page', {
        title: 'My First Blog post',
        heading: 'My First Blog Post',
        content: 'Hello and welcome to my first blog post',
    });
});

app.get('/blog-2', function(req, res) {
    // Add logic for blog-2
});

app.get('/blog-3', function(req, res) {
    // Add logic for blog-3
});

app.listen(8080, function() {
    console.log('The server is running');
});

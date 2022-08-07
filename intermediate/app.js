
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodetuts.blbljx6.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected');
        app.listen(3000);
    })
    .then((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests

// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);

//     next(); // continue to next middleware don't hang here!
// });

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/single-blog', (req, res) => {
    Blog.findById('62f01a96dcbd0201d2803e68')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.render('./views/index.html', { root: __dirname }); // old before we add ejs view engine

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', { root: __dirname }); // old before we add ejs view engine
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
})

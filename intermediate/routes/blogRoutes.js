
const Blog = require('../models/blog');
const express = require('express');

const router = express.Router();

// == blog routes ==

// (get blogs from db)
router.get('/', (req, res) => {
    // find all blogs and render it to the index route
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// post blog to db
router.post('/', (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err.message);
        })
});

// get one post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result , title: `Blog | ${result.title}`});
        })
        .catch((err) => {
            console.log(err.message);
        })
});

// handler for a delete request
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err.message);
        })
});

module.exports = router;

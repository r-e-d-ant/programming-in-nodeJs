
const Blog = require('../models/blog');

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

// (get blogs from db)
const blog_index = (req, res) => {
    // find all blogs and render it to the index route
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
}
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result , title: `Blog | ${result.title}`});
        })
        .catch((err) => {
            console.log(err.message);
        });
}
const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create' });
}
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err.message);
        });
}
const blog_delete = () => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err.message);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}
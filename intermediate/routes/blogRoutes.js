const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
// post blog to db
router.post('/', blogController.blog_create_post);
// get one post
router.get('/:id', blogController.blog_details);
// handler for a delete request
router.delete('/:id', blogController.blog_delete);

module.exports = router;

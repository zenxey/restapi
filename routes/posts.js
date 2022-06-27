const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//get back all posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//post within posts e.g. "localhost:3000/posts/specific"
// router.get('/Specific', (req, res) => {
//     res.send('These are Specific Posts');
// });

//submits a post
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
// alt way to post the data on db
//     post.save()
//     .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err });
//         });
// });

//specific post
router.get('/:postId', async(req, res) => {
    try {
        console.log(req.params.postId) //check console if the request was sent successfully!
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete specific post
router.delete('/:postId', async(req, res) => {
    try {
        const specificdeleted = await Post.remove({ _id: req.params.postID });
        res.json(specificdeleted);
    } catch (err) {
        res.json({ message: err });
    }
});

//update specific post (title) by ID
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } }, { $set: { description: req.body.description } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
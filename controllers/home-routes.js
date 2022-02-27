const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Gather all posts for the landing page
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }]
    });
    const posts = postData.map(element => {
      return element.get({ plain: true });
    });
    res.render("all-posts", {
      posts,
      logged_in: req.session.logged_in,
    });
  }
});


// get single post
router.get('/post/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [{ model: User }, { model: Comment, include: { model: User } }]
  });
  const post = postData.get({ plain: true });
  res.render("single-post", { post, user_id: req.session.user_id });
});



router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;

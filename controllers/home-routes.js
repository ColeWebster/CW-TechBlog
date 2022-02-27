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
  } catch (err) {
		res.status(500).json(err);
  }
});


// get single post
router.get('/post/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{ model: User },
				{model: Comment, include: {model: User,},},
			],
		});

		if (!postData) {
			res.status(404).json({ message: 'No post by that ID' });
		}
		const post = postData.get({ plain: true });
		const comments = post.comments;

		res.render('single-post', {
			post,
			comments,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', withAuth, async (req,res) => {
  try {
    const userData = await User.findByPk(rew.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{ model: Post }],
    });

    const user = userData.get({plain: true});

    res.render('dashboard', {
    ...User,
    logged_in: req.session.logged_in,
  });
  } catch (err) {
		res.status(500).json(err);
  } 
});

module.exports = router;

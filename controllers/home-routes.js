const router = require('express').Router();
const { Project } = require('../../../inclass/week8/day2/28-Stu_Mini-Project/Main/models');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
      const projectData = await Post.findAll({
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
          ],
        });
  
        const projects = projectData.map((Post) => Post.get({ plain: true }));

        res.render('all-posts', {
            projects,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get single post
router.get('/post/:id', async (req, res) => {
    try {
        const projectData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });
    
        const project = Post.get({ plain: true });
    
        res.render('Post', {
          ...Post,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
      }
    
      res.render('login');
    });

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;

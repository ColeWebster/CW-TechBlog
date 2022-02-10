const router = require('express').Router();
const { Project } = require('../../../inclass/week8/day2/28-Stu_Mini-Project/Main/models');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');
//Require the correct files from the models and authorizations


router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
  const projectData = await Post.findall({
  where: {
    user_id: req.session.user_id
  }
  
  res.render('user-landing', {posts, user})
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
  res.render(newProject);
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
  const projectData = await Post.findByPk(req.params.id);
  const project = projectData.get({ plain: true });
  res.render('edit-post', project);
});

module.exports = router;

const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
//Require the correct files from the models and authorizations


router.get('/', withAuth, async (req, res) => {
  // Pulls both Post and User data too put on the webpage.
  const postData = await Post.findAll({
    where: {
      user_id: req.session.user_id
    }
  });
  const userData = await User.findByPk(req.session.user_id);
  const posts = postData.map(Element => Element.get({ plain: true }));
  const user = userData.get({ plain: true});
  console.log(posts);
  res.render("user-landing", { posts, user, layout: "dashboard" });
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

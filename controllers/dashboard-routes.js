const router = require('express').Router();
const { Project } = require('../../../inclass/week8/day2/28-Stu_Mini-Project/Main/models');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');
//Require the correct files from the models and authorizations


router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
  const projectData = await Project.findall({
    include: [
      {
        model: Post,
        attributes: ['post_id']
      }
    ]
  })
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
  
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
});

module.exports = router;

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../utils/auth.js');
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
  // Complete the asynchronous function for router.post
  try {
    const commentData = await Comment.create({
      body: req.body.body,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(404).json('Unable to add comment');
  }
});

module.exports = router;
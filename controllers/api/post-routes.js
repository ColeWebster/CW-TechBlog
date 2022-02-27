const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')
//Require the correct files from the models and authorizations

//Grabbing all posts
router.get('/', async (req, res) => {
  const postData = await Post.findAll();
  res.status(200).json(postData)
});

router.post('/', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.params.session.user_id
      });
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err)
    }
  });


router.put('/:id', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
      try {
        const updatePost = await Post.update(req.body, {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
        if (!updatePost) {
          res.status(404).json({ message: "No post able to be updated with that ID"});
          return;
        }
        res.status(200).render(updatePost);
      } catch (err) {
        res.status(400).json(err)
});

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
  try {
    const postData = await Post.destroy({
      where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      
      if (!postData) {
        res.status(400).json({ message: 'No post found with that ID' });
        return;
      }
      
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json("Unable to remove that post");
    }
});

module.exports = router;
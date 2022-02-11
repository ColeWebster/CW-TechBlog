const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json("Unable to post");
  }
});

router.put('/:id', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
  try {
    const updateData = await Post.update({
      title: req.body.title,
      body: req.body,
    })

    if (!updateData) {
      res.status(404).json({ message: 'No item with that ID '});
      return;
    }

    res.status(200).json('updateData');
  } catch (err) {
    res.status(500).json("Unable to make the post");
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
  try {
    const projectData = await Post.destroy({
      where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      
      if (!projectData) {
        res.status(400).json({ message: 'No post found with that ID' });
        return;
      }
      
      res.status(200).json('projectData');
    } catch (err) {
      res.status(500).json("Unable to remove that post");
    }
});


module.exports = router;
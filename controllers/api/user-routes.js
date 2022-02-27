const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
//Require the correct files from the models

router.post('/', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try {
    const userData = await User.create(req.body);

    req.session.save (() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
  try {
    const userData = await User.findOne({ where: {email: req.body.username} });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, try again' });
      return;
    }

    const checkPassword = await userData.verifyPassword(req.body.password);

    if (!checkPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // Create the correct functionality for this post request with error handling
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
      
module.exports = router;
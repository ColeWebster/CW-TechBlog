const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
  // Complete the asynchronous function for router.post
  
});

module.exports = router;

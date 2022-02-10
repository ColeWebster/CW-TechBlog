const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
//Require the correct files into the api folder

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
//Create the router.use functionality for each required file
module.exports = router;
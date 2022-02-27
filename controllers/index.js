const router = require('express').Router();

//Create the api routes and require them to use them within the controllers
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use(homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
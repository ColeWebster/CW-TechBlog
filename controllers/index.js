const router = require('express').Router();

//Create the api routes and require them to use them within the controllers
const apiRoutes = require('./api/index');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use(homeRoutes);
router.use('/dashboard-routes', dashboardRoutes);

module.exports = router;
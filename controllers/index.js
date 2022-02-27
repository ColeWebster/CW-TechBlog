const router = require('express').Router();

//Create the api routes and require them to use them within the controllers
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api/index');

router.use(homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard-routes/', dashboardRoutes);

module.exports = router;
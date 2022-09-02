const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const homeRoutes = require('../home-routes');
const dashboardRoutes = require ('../dashboard-routes');


router.use('/', homeRoutes);
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
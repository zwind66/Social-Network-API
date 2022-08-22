// Set requirements 
const router = require('express').Router();
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// add routes
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

// Export router
module.exports = router;
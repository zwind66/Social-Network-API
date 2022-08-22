// Require express router
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

//  /api/thoughts 
router
    .route('/')
    .get(getAllThoughts);

// /api/thoughts/:id <GET, PUT, DELETE>
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

//  /api/thoughts/:userId <POST>
router
    .route('/:userId')
    .post(createThoughts);

//  /api/thoughts/:thoughtId/reactions <POST>
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

//  /api/thoughts/:thoughtId/reactionId <DELETE>
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

// Export router
module.exports = router;
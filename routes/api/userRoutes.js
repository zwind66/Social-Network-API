// Requirements
const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users GET all and POST 
router.route('/').get(getUser).post(createUser);

// /api/users/:userId GET, PUT and DELETE by ID
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// export router
module.exports = router;
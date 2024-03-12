// imports express & functions from controllers
const router = require('express').Router();
const { getUsers, getOneUser, createUser, deleteUser, updateUser, addFriend, deleteFriend } = require('../../controllers/userController');

// /api/users
// gets all & creates a users/user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// gets & updates & deletes a user
router.route('/:userId').get(getOneUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
// add & deletes friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/all', userController.getAllUsers);
router.post('/create-user', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/edit-user/:id', userController.editUser);
router.delete('/delete-user/:id', userController.deleteAnUser);

module.exports = router;
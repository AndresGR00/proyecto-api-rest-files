const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { uploadUsers } = require('../../middlewares/imgs');
const { isAuth, isAdmin} = require('../../middlewares/auth');

router.get('/all', userController.getAllUsers);
router.post('/create-user', uploadUsers.fields([{name: 'profileImg' }]), userController.createUser);
router.post('/login', userController.loginUser);
router.put('/edit-user/:id', [isAuth],  uploadUsers.fields([{name: 'profileImg' }]), userController.editUser);
router.delete('/delete-user/:id', [isAdmin], userController.deleteAnUser);

module.exports = router;
const router = require('express').Router();
const monumentController = require('../controllers/monument.controller');
const { uploadMonuments } = require('../../middlewares/imgs');
const { isAuth, isAdmin } = require('../../middlewares/auth')

router.get('/all', monumentController.getAllMonuments);
router.post('/create-monument', uploadMonuments.fields([{ name: "img" }]), monumentController.createMonument);
router.put('/edit-monument/:id', [isAuth], uploadMonuments.fields([{ name: "img" }]), monumentController.editMonument);
router.delete('/delete-monument/:id', [isAdmin], monumentController.deleteMonument);

module.exports = router;
const router = require('express').Router();
const monumentController = require('../controllers/monument.controller');

router.get('/all', monumentController.getAllMonuments);
router.post('/create-monument', monumentController.createMonument);
router.put('/edit-monument/:id', monumentController.editMonument);
router.delete('/delete-monument/:id', monumentController.deleteMonument);

module.exports = router;
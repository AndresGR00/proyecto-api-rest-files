const router = require('express').Router();
const countryController = require('../controllers/country.controller');
const { uploadCountries } = require('../../middlewares/imgs');
const { isAuth, isAdmin } = require('../../middlewares/auth');

router.get('/all', countryController.getAllCountries);
router.post('/create-country', uploadCountries.fields([{ name: "flag" }]) , countryController.createCountry);
router.put('/edit-country/:id', [isAuth], uploadCountries.fields([{ name: "flag" }]), countryController.editCountry);
router.delete('/delete-country/:id', [isAdmin], countryController.deleteCountry);

module.exports = router;
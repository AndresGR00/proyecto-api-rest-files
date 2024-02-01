const router = require('express').Router();
const countryController = require('../controllers/country.controller');
const {uploadCountries} = require('../../middlewares/imgs');

router.get('/all', countryController.getAllCountries);
router.post('/create-country', uploadCountries.fields([{ name: "flag" }]) , countryController.createCountry);
router.put('/edit-country/:id', uploadCountries.fields([{ name: "flag" }]), countryController.editCountry);
router.delete('/delete-country/:id', countryController.deleteCountry);

module.exports = router;
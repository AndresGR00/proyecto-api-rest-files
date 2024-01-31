const router = require('express').Router();
const countryController = require('../controllers/country.controller');

router.get('/all', countryController.getAllCountries);
router.post('/create-country', countryController.createCountry);
router.put('/edit-country/:id', countryController.editCountry);
router.delete('/delete-country/:id', dcountryController.eleteCountry);

module.exports = router;
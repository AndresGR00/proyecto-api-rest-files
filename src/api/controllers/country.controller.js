const { deleteImg } = require("../../utils/deleteImgs");
const Country = require("../models/country.model");

//Get All
const getAllCountries = async (req, res, next) => {
  try {
    const allCountries = await Country.find().populate('popularMonuments');
    res.status(200).json(allCountries);
  } catch (error) {
    return res.status(404).json("Countries not found");
  }
};

//Post
const createCountry = async (req, res, next) => {
  try {
    const newCountry = new Country({
      name: req.body.name,
      flag: req.body.flag,
      population: req.body.population,
      continent: req.body.continent,
      popularMonuments: req.body.popularMonuments,
    });
    if (req.files) {
      newCountry.flag = req.files.flag[0].path;
    }
    const savedCountry = await newCountry.save();
    return res.status(201).json(savedCountry);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//Put
const editCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const outdatedCountry = await Country.findById(id);
    const editedCountry = new Country(req.body);
    editedCountry._id = id;
    if(req.body.popularMonuments){
      editedCountry.popularMonuments = [
        ...outdatedCountry.popularMonuments,
        req.body.popularMonuments,
      ];
    }
    if (req.files && req.files.flag) {
      editedCountry.flag = req.files.flag[0].path;
    }
    const updatedCountry = await Country.findByIdAndUpdate(id, editedCountry, {
      new: true,
    });
    return res.status(200).json(updatedCountry);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//Delete
const deleteCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryDeleted = await Country.findByIdAndDelete(id);
    deleteImg(countryDeleted.flag);
    return res.status(200).json("Country deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAllCountries, createCountry, editCountry, deleteCountry };

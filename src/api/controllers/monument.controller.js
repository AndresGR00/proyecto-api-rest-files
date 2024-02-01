const { deleteImg } = require("../../utils/deleteImgs");
const Monument = require("../models/monument.model");

//Get All Monuments
const getAllMonuments = async (req, res, next) => {
  try {
    const allMonuments = await Monument.find();

    return res.status(200).json(allMonuments);
  } catch (error) {
    return res.status(404).json("Monuments not found");
  }
};

//Post
const createMonument = async (req, res, next) => {
  try {
    const newMonument = new Monument({
      name: req.body.name,
      img: req.body.img,
      country: req.body.country,
      constructionYear: req.body.constructionYear,
    });
    if (req.files) {
      newMonument.img = req.files.img[0].path;
    }
    const savedMonument = await newMonument.save();
    return res.status(201).json(savedMonument);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//Put
const editMonument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const editedMonument = new Monument(req.body);
    editedMonument._id = id;
    if (req.files && req.files.img) {
      editedMonument.img = req.files.img[0].path;
    }
    const updatedMonument = await Monument.findByIdAndUpdate(
      id,
      editedMonument,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedMonument);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//Delete
const deleteMonument = async (req, res, next) => {
  try {
    const { id } = req.params;
    const monumentDeleted = await Monument.findByIdAndDelete(id);
    deleteImg(monumentDeleted.img);
    return res.status(200).json("Monument deleted");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllMonuments,
  createMonument,
  editMonument,
  deleteMonument,
};

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const countriesStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto_8/Countries",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const monumentsStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto_8/Monuments",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const usersStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto_8/Users",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const uploadCountries = multer({ storage: countriesStorage });
const uploadMonuments = multer({ storage: monumentsStorage });
const uploadUsers = multer({ storage: usersStorage });

module.exports = { uploadCountries, uploadMonuments, uploadUsers };

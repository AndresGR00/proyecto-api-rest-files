const cloudinary = require("../config/cloudinary");

const deleteImg = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const folderName = `${imgSplited.at(-3)}/${imgSplited.at(-2)}`;
  const fieldName = imgSplited.at(-1).split(".");

  const public_id = `${folderName}/${fieldName[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image deleted");
  });
};

module.exports = { deleteImg };

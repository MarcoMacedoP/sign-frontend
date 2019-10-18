const fs = require("fs");
const multer = require("multer");
function appendFileToFormData(
  filePathToBeAppended,
  formData,
  fieldName
) {
  const stream = fs.createReadStream(filePathToBeAppended);
  formData.append(fieldName, stream);
}
function deleteFile(filePathToBeRemoved) {
  fs.unlink(filePathToBeRemoved, error =>
    error
      ? console.log(error)
      : console.log(
          `file deleted successfully! \n path: ${filePathToBeRemoved}`
        )
  );
}
const uploadFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "server/static/temp"),
    filename: (req, file, cb) => cb(null, file.originalname)
  })
});
module.exports = {
  uploadFile,
  appendFileToFormData,
  deleteFile
};

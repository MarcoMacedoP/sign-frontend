const convertToFormData = require("../convertToFormData");
const router = require("express").Router();
const {
  deleteFile,
  appendFileToFormData,
  uploadFile
} = require("../files");
const {api} = require("../../config");

router.all(
  "*",
  uploadFile.single("picture"),
  async (request, response, next) => {
    if (!request.file) {
      next();
    } else {
      const API_URL = `${api.host}${request.originalUrl}`;
      const formData = convertToFormData(request.body);
      appendFileToFormData(request.file.path, formData, "picture");
      const options = {
        data: formData,
        method: request.method,
        headers: {
          ...request.headers,
          ...formData.getHeaders(),
          Authorization: `Bearer ${request.cookies.token}`
        }
      };
      try {
        const {data} = await axios(API_URL, options);
        sendGoodResponse({...data, response});
      } catch (err) {
        next(err);
      } finally {
        deleteFile(request.file.path);
      }
    }
  }
);

module.exports = router;

const router = require("express").Router();
const axios = require("axios");
const { api } = require("../config");
const debug = require("debug")("app:teams:api");
const convertToFormData = require("../utils/convertToFormData");
const {
  deleteFile,
  appendFileToFormData,
  uploadFile
} = require("../utils/files");
const { sendGoodResponse } = require("../utils/responses");

router.patch(
  "/photo/:teamId",
  uploadFile.single("picture"),
  async (request, response, next) => {
    const formData = convertToFormData(request.body);
    appendFileToFormData(request.file.path, formData, "picture");
    debug(formData);
    const API_URL = `${api.host}${request.originalUrl}`;
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
      const { data } = await axios(API_URL, options);
      sendGoodResponse({ ...data, response });
    } catch (err) {
      next(err);
    } finally {
      if (request.file.path) {
        deleteFile(request.file.path);
      }
    }
  }
);
module.exports = router;

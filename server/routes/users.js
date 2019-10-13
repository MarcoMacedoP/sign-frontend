const router = require("express").Router();
const axios = require("axios");
const debug = require("debug")("app:users:routes");
const multer = require("multer");
const fs = require("fs");
//utils
const convertToFormData = require("../utils/convertToFormData");
//init
const config = require("../config");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "server/static/temp"),
    filename: (req, file, cb) => cb(null, file.originalname)
  })
});

const {route: apiRoute} = config.api;
//utils
const {
  sendBadResponse,
  sendGoodResponse
} = require("../utils/responses");

//++++++++++++routes+++++++++++++++++++++++
router.put(
  "/:userId",
  upload.single("profilePic"),
  async (req, res, next) => {
    debug(req.cookies.token);
    try {
      //create FormData from req.body
      const form = convertToFormData(req.body);
      //get the file and added into FormData
      const stream = fs.createReadStream(req.file.path);
      form.append("profilePic", stream);
      const {data, status} = await axios(
        `${apiRoute}/users/${req.params.userId}`,
        {
          method: "put",
          data: form,
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${req.cookies.token}`
          }
        }
      );
      sendGoodResponse({
        response: res,
        data: {...data.data},
        statusCode: status
      });
    } catch (error) {
      sendBadResponse({response: res, message: error.message, error});
    } finally {
      //remove the file in this server, is already stored in the other server
      if (req.file) {
        fs.unlink(req.file.path, error =>
          error
            ? console.log(error)
            : console.log("file deleted successfully")
        );
      }
    }
  }
);

module.exports = router;

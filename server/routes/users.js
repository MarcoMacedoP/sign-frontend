const router = require("express").Router();
const axios = require("axios");
const debug = require("debug")("app:users:routes");
const multer = require("multer");
const {api} = require("../config");
const fs = require("fs");
const jwt = require("jsonwebtoken");
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

//gets a user from the session if exists
router.post("/session", async (req, res) => {
  if (req.session.refreshToken && req.cookies.token) {
    const {sub} = jwt.decode(req.cookies.token);
    debug(sub);
    try {
      const {data} = await axios(`${api.route}/users/${sub}`, {
        headers: {Authorization: `Bearer ${req.cookies.token}`}
      });
      sendGoodResponse({
        response: res,
        message: "user restored from session",
        data: data.data
      });
    } catch (error) {
      debug(error);

      sendBadResponse({
        response: res,
        message: "No user on session",
        statusCode: 401,
        error
      });
    }
  } else {
    debug("no cookie or session");

    sendBadResponse({
      response: res,
      message: "No user on session",
      statusCode: 401
    });
  }
});

router.put(
  "/:userId",
  upload.single("profilePic"),
  async (req, res) => {
    debug("actualizando usuario");
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
      debug(error);
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

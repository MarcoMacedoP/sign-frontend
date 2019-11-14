//libs
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const MongoStore = require("connect-mongo")(session);
//own middlewares
const refreshToken = require("./utils/middlewares/refreshToken");
const uploadPicture = require("./utils/middlewares/uploadPicture");
const {
  logError,
  wrapError,
  responseError
} = require("./utils/middlewares/errorHandler");
//config
const config = require("./config");
const sessionOptions = {
  resave: true,
  saveUninitialized: true,
  secret: config.session.secret,
  cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false }
};
//initialize app
const app = express();
//routes
const authRoute = require("./routes/auth");
const tokenRoute = require("./routes/token");
const usersRoute = require("./routes/users");
const teamsRoute = require("./routes/teams");
const redirectToMainApi = require("./routes/redirectToMainApi");

//middlewares
app.use(
  cors({
    origin: /.*/,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);
const mongoClient = new MongoClient(config.db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoClient.connect((err, client) => {
  if (err) {
    console.log(err);
  } else {
    client.db(config.db.mongoDB);
    console.log("connected to mongodb succesfully!");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cookie.secret));
app.use(
  session({
    ...sessionOptions,

    store: new MongoStore({
      client: mongoClient,
      secret: config.session.secret,
      autoRemove: "native",
      collection: "proxy-sessions"
    })
  })
);
//router-middlewares
app.use("/api", authRoute);
app.use("/api/token", tokenRoute);
app.use("/api/users", refreshToken, usersRoute);
app.use("/api/teams", refreshToken, teamsRoute);
app.use("/", refreshToken, uploadPicture, redirectToMainApi);
//error handlers
app.use(logError);
app.use(wrapError);
app.use(responseError);

//initialize server
app.listen(config.server.port, () => {
  console.log("server initialized on port", config.server.port);
});

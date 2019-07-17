
let mariadb = require("mariadb");
const config = require("../config.json").db;

const settings = {
      port            : config.port,
      host            : config.host,
      user            : config.user,
      password        : config.password,
      database        : config.database,
      connectionLimit : 5
    };
    module.exports =  () => mariadb.createConnection(settings);
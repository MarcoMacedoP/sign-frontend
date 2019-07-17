//Server
const express = require("express");
// Config files
const config = require("./config.json");
const server = config.server;

//Functions
module.exports = {
  async start(app) {
    try {
      await app.listen(server.port, () => {
        console.log(`server started at port:  ${server.port}....`);
      });
      return app;
    } catch (e) {
      throw new Error(`Error ${e}...`);
    }
  }
};



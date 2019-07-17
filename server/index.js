//Modules
const express = require("express");
const body_parser = require('body-parser');
//Funcions
const server = require("./server");
const users = require("./api/Users");

const app = express();
server.start(app);
app.use(body_parser.urlencoded({extended:true}));

app.get("/", (request, response) => {
  response.send("Home is where the haunt is...");
});

app.post("/user/login/", async (request, response) => { 
    try{
        // const email= request.params.email;
        // const password = request.params.password;
        // const status = await users.logIn(email, password);
        // console.log(status);
        
        // response.send(status)
        console.log(request.body)
        response.send(request.body)
        
    }
    catch(error){
        response.send(error)
    }
});




const mongoose = require("mongoose");
const url =
  "mongodb+srv://standarsazon:SazoN@2021@cluster0.6uuni.mongodb.net/standarsazon";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("ya estamos conectados");
  })
  .catch((error) => console.error("ERROR:", error));

//require("dotenv").config();

//const server = require("./src/server");

//server.listen("8080", () => {
//console.log("Server is listening");
//});

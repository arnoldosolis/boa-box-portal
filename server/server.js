const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

var BoxSDK = require("box-node-sdk");

// Initialize the SDK with your app credentials
var sdk = new BoxSDK({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Create a basic API client, which does not automatically refresh the access token
var client = sdk.getBasicClient(process.env.DEVELOPER_TOKEN);

// Get your own user object from the Box API
// All client methods return a promise that resolves to the results of the API call,
// or rejects when an error occurs
client.users
  .get(client.CURRENT_USER_ID)
  .then((user) => console.log("Hello", user.name, "!"))
  .catch((err) => console.log("Got an error!", err));

// Create a folder and upload file attatchments
// Create a folder and upload file attatchments
var newFolder;
var fileName;
var uniqueFile;

app.post("/upload", (req, res) => {
  newFolder = "test";
  fileName = "ssn";
  // uniqueFile = req.body.uniqueFile;
});

client.folders.create("0", "Solis_Arnoldo_1234").then((folder) => {
  console.log(folder);
});

client.files
  .uploadFile("0", "id", "../client/src/Images/sample_id.jpg")
  .then((file) => {
    console.log(file);
  });

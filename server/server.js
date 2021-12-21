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
app.post("/upload", (req, res) => {
  const newFolder = req.body.newFolder;
  const file_Name = req.body.file_name;
  const uniqueFile = req.body.uniqueFile;

  client.folders.create("0", newFolder).then((folder) => {
    console.log(folder);
    res.send(folder);
  });

  client.files.uploadFile("0", file_Name, uniqueFile).then((file) => {
    console.log(file);
    res.send(file);
  });
});

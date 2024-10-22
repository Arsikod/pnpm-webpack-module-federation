const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const pathToImage = path.resolve(__dirname, "../dist", "index.html");
  const contentFromImage = fs.readFileSync(pathToImage, "utf-8");

  res.send(contentFromImage);
});

app.listen(9002, () => {
  console.log("Server is running on port 9002");
});

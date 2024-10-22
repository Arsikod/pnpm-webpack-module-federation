const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/greeting", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist", "greeting.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");

  res.send(contentFromHtmlFile);
});

app.get("/image", (req, res) => {
  const pathToImage = path.resolve(__dirname, "../dist", "image.html");
  const contentFromImage = fs.readFileSync(pathToImage, "utf-8");

  res.send(contentFromImage);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

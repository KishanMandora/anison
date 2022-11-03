const express = require("express");
const exploreData = require("./data.js");
const exploreRouter = express.Router();

exploreRouter.get("/", (req, res) => {
  const videosData = exploreData.map(
    ({ id, title, duration, hash, thumbnails }) => {
      return { id, title, duration, hash, thumbnails };
    }
  );

  res.json({ data: videosData, success: true });
});

module.exports = exploreRouter;

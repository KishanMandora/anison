const express = require("express");
const exploreData = require("./data.js");
const watch = express.Router();

watch.get("/:id", (req, res) => {
  const { id } = req.params;

  const video = exploreData.find((vid) => vid.id === id);

  if (video) {
    res.json({ data: video, success: true });
  } else {
    res.status(404).json({ message: "Video not found", success: false });
  }
});

module.exports = watch;

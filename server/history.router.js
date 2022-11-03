const express = require("express");
const history = express.Router();

const historyData = [];

history.post("/", (req, res) => {
  const historyVideo = req.body;
  historyData.push(historyVideo);
  res.json({ success: true, historyVideo });
});

history.get("/", (req, res) => {
  res.json({ data: historyData });
});

module.exports = history;

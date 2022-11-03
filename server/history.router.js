const express = require("express");
const history = express.Router();

const historyData = [];

history
  .route("/")
  .get((req, res) => {
    res.json({ data: historyData });
  })
  .post((req, res) => {
    const historyVideo = req.body;
    historyData.push(historyVideo);
    res.json({ success: true, historyVideo });
  });

module.exports = history;

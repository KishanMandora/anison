const express = require("express");
const bodyParser = require("body-parser");
const exploreRouter = require("./explore.router");
const app = express();
const port = 3000;

const history = [];

app.use(bodyParser.json());
app.use("/explore", exploreRouter);

app.get("/", (req, res) => {
  res.send("Hello Earth!");
});

app.post("/history", (req, res) => {
  const historyVideo = req.body;
  history.push(historyVideo);
  res.json({ success: true, historyVideo });
});

app.get("/history", (req, res) => {
  res.json({ data: history });
});

app.get("/watch/:id", (req, res) => {
  const { id } = req.params;

  const video = data.find((vid) => vid.id === id);

  if (video) {
    res.json({ data: video, success: true });
  } else {
    res.status(404).json({ message: "Video not found", success: false });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
